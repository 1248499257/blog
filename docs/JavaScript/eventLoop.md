# 异步相关以及 Event Loop

## 异步编程
大家都知道，浏览器是**多线程**的但JS的执行环境是**单线程**的，既一次只能完成一件任务。如果有多个任务，那么后面的就必须排队。

这种模式的好处是实现起来比较简单，执行环境相对单纯；但坏处也很明显，就是只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。

为了解决这个问题，JS 将任务的执行模式分成两种：**同步** 和 **异步**

* **同步**：任务是按照顺序依次处理的，当前这件事没有彻底做完，下一件事是执行不了的。

* **异步**：当前这件事没有彻底做完，需要等待一段时间才能继续处理，此时我们不等，继续执行下面的任务，当后面的任务完成后，在去把没有彻底完成的任务完成。

## JS中常见的异步编程

1. 所有的事件绑定都是异步编程  xxx.onclick = function(){};

2. 所有的定时器都是异步编程

3. AJAX中一般都使用异步编程处理

4. 回调函数也算是异步编程

5. Promise, async/await(这里暂时不提太多promise 和 async的相关知识，等接下来有空再手撕promise..)

## 浏览器是如何规划同步异步编程

1. 浏览器是多线程的，JS是单线程的（浏览器只给JS执行分配一个线程）：单线程的特点就是一次只能处理一件事情

2. JS在单线程中实现异步的机制，主要依赖于浏览器的**任务队列**完成的。浏览器中有两个任务队列（主任务队列jobs，等待任务队列task）

3. 在jobs自上而下执行的时候，如果遇到一个异步操作任务，没有立即执行，而是把它放到task中排队

4. 当jobs执行完成后才回到task中进行查找（jobs完不成，不管task中是否有到达执行事件的任务都不处理，因为JS一次只能处理一件事情）

5. task中谁优先达到处理条件了（这里下面会讲执行顺序），就把这个任务重新放到jobs中执行，执行完后，再去task中找

6. 其实我们执行JS代码实际上就是往执行栈（一种后进先出的存储函数调用的栈结构）中放入函数

## 异步队列中的执行顺序

```js
console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')
// script start => async2 end => Promise => script end => promise1 => promise2 => async1 end => setTimeout
```
::: warning
新的浏览器中不是如上打印的，因为 await 变快了。
:::

首先肯定是同步任务先执行的，所以先输出 **script start**，接着遇到了 **async1()**，但是**async1**里面有 **await async2()**所以此时输出了 **async2 end**，接着函数返回了一个**promise**，往下走函数执行到了**Promise**这里，输出 **promise**。此时jobs队列执行完毕，接着查找task。那么又会回到 **await** 的位置执行返回的 **Promise** 的 **resolve** 函数，这又会把 **resolve** 丢到task中，接下来去执行 **then** 中的回调，当两个 **then** 中的回调全部执行完毕以后，又会回到 **await** 的位置处理返回值，这时候你可以看成是 **Promise.resolve(返回值).then()**，然后 **await** 后的代码全部被包裹进了 **then** 的回调中，所以 **console.log('async1 end')** 会优先执行于 **setTimeout**。

这里肯定是会看的非常绕，那么下面我总结一下：

1. 首先执行同步代码，这属于宏任务

2. 当执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行

3. 执行所有微任务

4. 当执行完所有微任务后，如有必要会渲染页面

5. 然后开始下一轮 Event Loop，执行宏任务中的异步代码，也就是 setTimeout 中的回调函数
