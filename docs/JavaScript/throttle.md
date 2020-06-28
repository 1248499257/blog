## 原理

不管事件的触发频率多高，只在指定的时间内执行一次，这也是 setTimeout 设计的初衷。所以可以直接用 setTimeout 实现，也可以计算触发时间和指定时间的差值去实现。
```js
    /** setTimeout版本
     * @param {Function} func 延迟后需要执行的函数
     * @param {string} wait 延迟的时间
     */
    function throttle(func, wait) {
      let timeId = null;
      return function (...args) {
        if (!timeId) {
          timeId = setTimeout(() => {
            timeId = null;
            func.apply(this, args);
          }, wait);
        }
      }
    }

    throttle(function () {
        console.log('节流');
    }, 300)
```


```js
    /** 时间差值版本
     * @param {Function} func 延迟后需要执行的函数
     * @param {string} wait 延迟的时间
     * @param {boolean} flag 判断是否立即执行
     */
    function throttle(func, wait = 0) {
        if (typeof func !== 'function') {
            throw new TypeError('need a function');
        }
        wait = +wait;
        let timeout = null;
        let startTime = new Data();
        return function () {
            let currentTime = new Date() - 0;
            timeout && clearTimeout(timeout);
            if (currentTime - startTime > wait) {
                func.apply(this, ...arguments);
                startTime = currentTime;
            } else {
                timeout = setTimeout(fn.bind(this), wait, ...arguments);
            }
        }
    }

    throttle(function () {
        console.log('节流');
    }, 300)
```

## 应用场景

适用于涉及与后端交互的按钮，由于网络原因或者其他原因，导致接口没有返回值，用户一直点的问题。
