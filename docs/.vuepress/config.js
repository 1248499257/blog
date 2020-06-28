module.exports = {
    title: "Peanut's Blog",
    description: 'Keep Going',
    head: [['link', { rel: 'icon', href: '/favicon.png' }]],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text: '文章目录',
                items: [
                    { text: 'JavaScript', link: '/JavaScript/' },
                    { text: 'CSS', link: '/CSS/' },
                    { text: 'HTTP', link: '/HTTP/' },
                    { text: 'node', link: '/Node/' },
                    { text: '小程序', link: '/Applets/' },
                ],
            },
            { text: '算法与数据结构', link: '/Algorithm/' },
            { text: '书籍/收藏文章', link: '/Book/' },
            // { text: 'Resume', link: '/Resume/' },
            { text: 'GitHub', link: 'https://github.com/1248499257' },
        ],
        sidebar: {
            '/JavaScript/': [
                { title: '你不知道的JS记录', children: ['', 'youdontknowJS'] },
                { title: '事件以及事件对象', path: 'event' , children: [] },
                { title: '异步相关以及EventLoop', path: 'eventLoop' , children: [] },
                { title: '原型和class', path: 'prototype' , children: [] },
                { title: '基于promise封装axios', path: 'request' , children: [] },
                { title: '在循环中使用async/await', path: 'async' , children: [] },
                { title: '函数节流', path: 'throttle' , children: [] },
                { title: '函数防抖', path: 'debounce' , children: [] },
            ],
            '/CSS/': ['', 'grid'],
            '/Vue/': [''],
            '/HTTP/': ['', 'UDPORTCP', 'HTTP2', 'OSI'],
            '/Node/': [''],
            '/Applets/': ['', 'detail', 'components'],
        },
    },
    base: '/'
}
