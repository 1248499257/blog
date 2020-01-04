module.exports = {
    title: "Haha's Blog",
    description: '如果你工作很忙，除了你是真的很重要之外，更可能的原因是：你很弱。',
    head: [['link', { rel: 'icon', href: '/favicon.png' }]],
    themeConfig: {
        nav: [
            { text: 'dashboard', link: '/' },
            {
                text: 'Personal article',
                items: [
                    { text: 'JavaScript', link: '/JavaScript/' },
                    { text: 'CSS', link: '/CSS/' },
                    { text: 'HTTP', link: '/HTTP/' },
                    { text: 'node', link: '/Node/' },
                    { text: '小程序', link: '/Applets/' },
                ],
            },
            { text: 'Book', link: '/Book/' },
            { text: 'Resume', link: '/Resume/' },
            { text: 'GitHub', link: 'https://github.com/1248499257' },
        ],
        sidebar: {
            '/JavaScript/': [
                '',
                'youdontknowJS',
                'event',
                'eventLoop',
                'prototype'
            ],
            '/CSS/': ['', 'grid'],
            '/Vue/': [''],
            '/HTTP/': ['', 'UDPORTCP','HTTP2', 'OSI'],
            '/Node/': [''],
            '/Applets/': ['', 'detail', 'components'],
        },
    },
    base: '/'
}
