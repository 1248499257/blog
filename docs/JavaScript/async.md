# 在循环中使用 await/async

## 准备一个例子

假设你想从下面这个水果篮中获取对应水果的数量

```js
    const fruitBasket = {
        apple: 27,
        graper: 0,
        pear: 14,
    };
```

要获取到对应数量的话，可以使用 getNumFruit 函数

```js
    const getNumFruit = fruit => {
        return fruitBasket[fruit];
    }
    const numApples = getNumFruit('apple'); // 27
```

再假设这些水果位于服务器上面，需要通过请求去获取，这里我们使用 setTimeout 去模拟异步获取

```js
    const sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    const getNumFruit = fruit => {
        return sleep(1000).then(v => fruitBasket[fruit]);
    }

    getNumFruit('apple').then(num => console.log(num);) // 27
```

最后，假设我们想要利用 await 和 getNumFruit 去获取每个水果对应的数量

```js
    const control = async _ => {
    console.log('Start');

    const numApples = await getNumFruit(“apple”);
    console.log(numApples);

    const numGrapes = await getNumFruit(“grape”);
    console.log(numGrapes);

    const numPears = await getNumFruit(“pear”);
    console.log(numPears);

    console.log('End');

    // Start
    // 27
    // 0
    // 14
    // End
};
```

## 在循环中使用 await

让我们尝试在数组中使用循环，并且同样利用 getNumFruit 去获取对应的水果数量

由于 getNumFruit 返回的是一个 promise，所以我们可以使用 await 去等待 resolve 的值

```js
    const fruitsToGet = ['apple', 'grape', 'pear'];

    const forLoop = async _ => {
        console.log('start');

        for(let i = 0; i < fruitsToGet.length; i++) {
            const fruit = fruitsToGet[i];
            const numFruit = await getNumFruit(fruit);
            console.log(numFruit);
        };

        console.log('end');
    }
```
**当你在循环中使用 await 时，你希望 JavaScript 暂停执行，直到 promise 返回的值解析完成。这意味着循环中的 await 是同步（串联）执行的**

输出的值正是你所期望的

```js
    // Start
    // 27
    // 0
    // 14
    // End
```
这种行为适用于大多数循环（while, for-of....）

但是它不能用于需要回调的循环，这种需要回调的循环包括 forEach, map, filter 和 reduce，下面是 await 在这些循环的一些表现。


## 在 forEach 上使用 await

我们会在 forEach 上使用同样的写法

```js
    const forLoop = async _ => {
        console.log('start');

        fruitsToGet.forEach(async fruit => {
            const numFruit = await getNumFruit(fruit);
            console.log(numFruit);
        })

        console.log('end');
    }
```
你可能期望它能像之前那样按照顺序打印，但事实上它是如下输出

```js
    // 'Start'
    // 'End'
    // '27'
    // '0'
    // '14'
```
**JavaScript 之所以会这样输出是因为 forEach 不支持感知 promise 的功能，它也不支持 async/await，所以你不能在 forEach 中使用 async/await**

## 在 map 上使用 await

如果在 map 上使用 await，map 会返回一个 promise 数组，这是因为异步函数会返回 promise的原因

```js
    const forLoop = async _ => {
        console.log('start');

        const numFruits = await fruitsToGet.map(async fruit => {
            const numFruit = await getNumFruit(fruit);
            console.log(numFruit);
        })

        console.log('end');
    }

    // start
    // [Promise, Promise, Promise]
    // end
```
对此，我们可以使用 **await Promise.all(arrayOfPromise)** 来解决

```js
    const forLoop = async _ => {
        console.log('start');

        const numFruits = await fruitsToGet.map(async fruit => {
            const numFruit = await getNumFruit(fruit);
            return numFruis;
        })

        const numFruits = await Promise.all(numFruits);
        console.log(numFruits);

        console.log('end');
    }

    // start
    // [27, 0, 24]
    // end
```

## 在 filter 上使用 await

我们可以利用 filter 去得到有20个以上的水果，即只有苹果没有葡萄和梨

```js
    const forLoop = async _ => {
        console.log('start');

        const numFruits = await fruitsToGet.filter(async fruit => {
            const numFruit = await getNumFruit(fruit);
            return numFruis > 20;
        })

        const numFruits = await Promise.all(numFruits);
        console.log(numFruits);

        console.log('end');
    }
```

你可能会觉得打印出如下

```js
    // start
    // [27]
    // end
```

但事实上，filter 中的 await 并不是这样工作的，它还是会返回一个未过滤的数组

```js
    // start
    // [27, 0, 24]
    // end
```

为什么呢？因为在 filter 中使用 await 时，callback 总是返回一个 promise，相当于返回一个 true，所以数组中所有的判断都会通过

```js
    const filtered = array.filter(trye)
```

当然，我们可以利用别的方法去使用 filter 和 await

1. 使用 map 得到一个解析后的数组

2. 等待数组解析完成

3. 再利用 filter 进行过滤

```js
    const filterLoop = async _ => {

        console.log('start');

        const promises = await fruitsToGet.map(fruit => getNumFruit(fruit));
        const numFruits = await Promise.all(promises);
        const moreThan20 = fruitsToGet.filter((fruit, index) => {
        const numFruit = numFruits[index];
            return numFruit > 20;
        });

        console.log(moreThan20);

        console.log('end');
    };

    // start
    // 27
    // end
```

## 在 reduce 上使用 await

在这个例子里面，假设我们想得到所有水果的总数，我们通常会使用 reduce 来循环一个数组，然后把这个数字加起来。

```js
    // Reduce if there’s no await
    const reduceLoop = _ => {
        console.log('start');

        const sum = fruitsToGet.reduce((sum, fruit) => {
        const numFruit = fruitBasket[fruit];
            return sum + numFruit;
        }, 0);

        console.log(sum);
        console.log('end');
    };

    // start
    // 40
    // end
```

当你在这里面加上了 await 之后，结果会变的很奇怪

```js
    // Reduce if we await getNumFruit
    const reduceLoop = async _ => {
        console.log('start');

        const sum = await fruitsToGet.reduce(async (sum, fruit) => {
            const numFruit = await getNumFruit(fruit);
            return sum + numFruit;
        }, 0);

        console.log(sum);
        console.log('end');
    };

    // start
    // [object Promise]14
    // end
```
[object Promise]14 是什么东西？？？

让我们来解析一下这个过程：

1. 在第一次迭代中，sum 为 0，numFruit 为 27（从getNumFruit('apple')得到的解析值），0+27是27

2. 在第二次迭代中，sum 是一个 promise (为什么？因为异步函数总是返回 promise！) numFruit 是 0。promise 不能正常添加到对象中，所以JavaScript将其转换为[object Promise]字符串。[object Promise] + 0 就是 [object Promise]0。

3. 在第三次迭代中，sum 也是一个 promise ，numFruit是14。[object Promise] +14 是 [object Promise]14。

至此，解开谜团

这意味着你可以在 reduce 里面的 callback 中使用 await，但必须先 await 累加器

```js
    const reduceLoop = async _ => {
        console.log('start');

        const sum = await fruitsToGet.reduce(async (promisedSum, fruit) => {
            const sum = await promisedSum;
            const numFruit = await getNumFruit(fruit);
            return sum + numFruit;
        }, 0);

        console.log(sum);
        console.log('end');
    };
    // start
    // 41
    // end
```

这样看起来可能会有点奇怪，所以还是建议先用 map 进行处理，再使用 reduce

## 总结

1. 如果想要在循环中同步的执行 await 调用，最好在没有回调函数的循环中使用，即 for， for-of， while...

2. 不要在 forEach 里面使用 await，使用上面说的来代替

3. 在 filter 和 reduce 中使用 await 时，建议先用 map 先一步处理

本文翻译自[点击阅读原文](https://medium.com/free-code-camp/javascript-async-and-await-in-loops-30ecc5fb3939)，仅作为个人学习用
