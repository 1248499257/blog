# 处理回调嵌套以及避免回调地狱

JavaScript 是一种奇怪的语言，在使用的时候你偶尔回去处理回调，但是这个回调又嵌套在另一个回调之中

人们将这种行为称为**回调地狱**

它看起来像这样：

```js
firstFunction(args, function() {

  secondFunction(args, function() {

    thirdFunction(args, function() {
      // And so on…
    });

  });

});
```

这些嵌套的回调可能让人觉得匪夷所思，但我认为这并不会成为一个“地狱”，因为在你了解如何去处理这些嵌套的回调后，你就知道这些“地狱”其实是可以管控的

## 关于回调

在这里，我们将讨论什么是回调，以及为什么在 JavaScript 中使用它们

## 解决回调地狱的四种办法

在这里列出四种解决回调地狱的方法：

1. 写注释

2. 把函数分割成更小的函数

3. 使用 promise

4. 使用 async/await

在深入研究解决方案之前，我们先来构造一个回调地狱

## 构造回调地狱

让我们想象一下，我们需要做一个汉堡，而做汉堡，需要经历以下步骤：

1. 获取一个食材（假设是一个牛肉汉堡）

2. 煮牛肉

3. 买汉堡包

4. 把煮好的牛肉放在汉堡中间

5. 吃了它

如果这些步骤是同步的，你将会看到一个类似这样的函数：

```js
const makeBurger = () => {
  const beef = getBeef();
  const patty = cookBeef(beef);
  const buns = getBuns();
  const burger = putBeefBetweenBuns(buns, beef);
  return burger;
};
const burger = makeBurger();
serve(burger);
```

接下来假设汉堡不能我们亲手做，需要我们指导助手去完成，并且指导助手后，我们必须**等待**助手完成才能进行下一步

如果我们想要在 JavaScript 中等待一些东西，那么我们就需要用到回调，而要做汉堡，我们就先要得到牛肉，拿到牛肉后才能进行下一步的烹饪

```js
const makeBurger = () => {
  getBeef(function(beef) {
    // We can only cook beef after we get it.
  });
};
```

要煮牛肉，我们必须现将牛肉放入锅中（cookbeff）函数，接着，我们要等待牛肉被煮熟

当牛肉煮熟后，我们就能吃到汉堡了！

```js
const makeBurger = () => {
  getBeef(function(beef) {
    cookBeef(beef, function(cookedBeef) {
      getBuns(function(buns) {
        // Put patty in bun
      });
    });
  });
};
```

接着我们把牛肉放入到汉堡里面，这样我们的汉堡就出炉啦

```js
const makeBurger = () => {
  getBeef(function(beef) {
    cookBeef(beef, function(cookedBeef) {
      getBuns(function(buns) {
        putBeefBetweenBuns(buns, beef, function(burger) {
            // Serve the burger
        });
      });
    });
  });
};
```

最后，我们可以享用汉堡啦！但是我们不能直接从 makeBurger 生成（return）一个汉堡，因为它是异步的，所以需要接受一个回调来提供汉堡

```js
const makeBurger = nextStep => {
  getBeef(function (beef) {
    cookBeef(beef, function (cookedBeef) {
      getBuns(function (buns) {
        putBeefBetweenBuns(buns, beef, function(burger) {
          nextStep(burger)
        })
      })
    })
  })
}
// Make and serve the burger
makeBurger(function (burger) => {
  serve(burger)
})
```

这就是所谓的回调地狱！

## 第一种解决回调地狱的办法——写注释

makeBurger 的回调地狱很容易理解，只是..它看起不来并不友好

假如你第一次阅读这个函数，你可能会对这个函数内包含了那么多回调感到疑问——这是哪个xxx写的？

在这种情况下，代码的编写者可以留下注释，让后人少一个骂你的理由

```js
// 做一个汉堡
// makeBurger包含四个步骤。
// 1.获取牛肉
// 2.将牛肉煮熟
// 3.买包子做汉堡。
// 4.把煮好的牛肉放在包子中间。
// 5.提供汉堡（来自回调）。
// 我们在这里使用回调，因为每一步都是异步的。
// 我们必须等待助手完成这一步。
// 在我们开始下一步之前

const makeBurger = nextStep => {
  getBeef(function(beef) {
    cookBeef(beef, function(cookedBeef) {
      getBuns(function(buns) {
        putBeefBetweenBuns(buns, beef, function(burger) {
          nextStep(burger);
        });
      });
    });
  });
};
```
尽管后人看到这段代码心里依然会吐槽 xx，但至少能看懂不是吗？

## 第二种解决回调地狱的办法——拆分

这里我们将尝试把代码一步一步的进行拆分

对于获取牛肉（getBeef）来说，我们可以去客厅的冰箱里获取，假设有两个冰箱，我们去左边那个

```js
const getBeef = nextStep => {
  const fridge = leftFright;
  const beef = getBeefFromFridge(fridge);
  nextStep(beef);
};
```

对于煮牛肉，我们可以把牛肉放进烤箱里面，烤个20分钟

```js
const cookBeef = (beef, nextStep) => {
  const workInProgress = putBeefinOven(beef);
  setTimeout(function() {
    nextStep(workInProgress);
  }, 1000 * 60 * 20);
};
```

每一个步骤都这样写的话，这是一件十分痛苦的事情

## 第三种解决回调地狱的办法——promise

promise 可以让代码变得更加利于管理，让他看起来不至于像上面一样一层一层的嵌套

```js
const makeBurger = () => {
  return getBeef()
    .then(beef => cookBeef(beef))
    .then(cookedBeef => getBuns(beef))
    .then(bunsAndBeef => putBeefBetweenBuns(bunsAndBeef));
};
// Make and serve burger
makeBurger().then(burger => serve(burger));
```
如果你使用单参数的 promise ，那么它可以修改成这样子

```js
const makeBurger = () => {
  return getBeef()
    .then(cookBeef)
    .then(getBuns)
    .then(putBeefBetweenBuns);
};
// Make and serve burger
makeBurger().then(serve);
```

这看起来是不是清爽多了！但是还有一个问题，如何将基于普通回调的代码转换成基于promise呢？

### 将回调转换成 promise

为了将 callback 转换成 promise，我们需要为每一个 callback 创建一个新的 promise，当回调成功时，我们可以利用 promise resolve 去解析这个值，反之我们可以利用 promise reject 去解析。

```js
const getBeefPromise = _ => {
  const fridge = leftFright;
  const beef = getBeefFromFridge(fridge);
  return new Promise((resolve, reject) => {
    if (beef) {
      resolve(beef);
    } else {
      reject(new Error(“No more beef!”));
    }
  });
};
const cookBeefPromise = beef => {
  const workInProgress = putBeefinOven(beef);
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(workInProgress);
    }, 1000 * 60 * 20);
  });
};
```

## 第四种解决回调地狱的办法——async/await

使用 async/await 要先知道两件事

1. 如何将 callback 转换成 promise （上文）

2. 如何使用 async/await

在了解了以上信息后，你就可以利用 async/await 把异步函数写成类似同步函数

```js
const makeBurger = async () => {
  const beef = await getBeef();
  const cookedBeef = await cookBeef(beef);
  const buns = await getBuns();
  const burger = await putBeefBetweenBuns(cookedBeef, buns);
  return burger;
};
// Make and serve burger
makeBurger().then(serve);
```

这里我们可以做一下改进，利用 promise.all 让两个助手分别去做汉堡和煮牛肉，并等待他们做完

```js
const makeBurger = async () => {
  const [beef, buns] = await Promise.all(getBeef, getBuns);
  const cookedBeef = await cookBeef(beef);
  const burger = await putBeefBetweenBuns(cookedBeef, buns);
  return burger;
};
// Make and serve burger
makeBurger().then(serve);
```

**这里可以用 promise 做同样的事，但是语法上就没有 async/await 看起来那么漂亮了**

## 最后

回调地狱并没有想象中的难以解决，有四种方法可以用来管理回调地狱

1. 写注释

2. 把函数分割成更小的函数

3. 使用 promise

4. 使用 async/await

本文翻译自[点击阅读原文](https://medium.com/free-code-camp/how-to-deal-with-nested-callbacks-and-avoid-callback-hell-1bc8dc4a2012)，仅作为个人学习用
