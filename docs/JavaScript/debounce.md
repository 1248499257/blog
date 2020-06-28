## 原理

不管事件的触发频率多高，一定在事件触发后的n秒执行，且只执行最后一次。可以简单理解为多次点击，只执行最后一次点击触发的函数。这里利用 setTimeout，判断在一定时间内（wait）没有重新被触发的话，就开始执行函数，返回一个自执行函数。
```js
    /**
     * @param {Function} func 延迟后需要执行的函数
     * @param {string} wait 延迟的时间
     */
    function debounce(func, wait = 0) {
        if (typeof func !== 'function') {
            throw new TypeError('need a function');
        }
        wait = +wait;

        return (function (...args) {
            if (timeId) clearTimeout(timeId);
            timeId = setTimeout(() => {
                func.apply(this, args);
            }, wait);
        }());
    }

    debounce(function () {
        console.log('防抖');
    }, 300)
```

这里也可以改成函数先执行一次，再等后面的事件触发后n秒后执行

```js
    /**
     * @param {Function} func 延迟后需要执行的函数
     * @param {string} wait 延迟的时间
     * @param {boolean} flag 判断是否立即执行
     */
    function debounce(func, wait = 0, flag = false) {
        if (typeof func !== 'function') {
            throw new TypeError('need a function');
        }
        wait = +wait;

        return (function (...args) {
            if (timeId) clearTimeout(timeId);
            if (flag && !timeId) func.apply(this, args);
            timeId = setTimeout(() => {
                func.apply(this, args);
            }, wait);
        }());
    }

    debounce(function () {
        console.log('防抖');
    }, 300)
```

## 应用场景

适用于监听窗口的缩放，滚动，input框的输入等高频触发的情景，并且在小程序方面也可以使用防抖去限制页面的多次跳转。
