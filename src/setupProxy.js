const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'http://localhost:8080',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }),
        proxy('/card', {
            target: 'https://api.bilibili.com/x/web-interface', //mid
            changeOrigin: true,
        }),
        proxy('/search', {
            target: 'https://api.bilibili.com/x/space/arc', //mid,pn
            changeOrigin: true
        }),
        proxy('/view', {
            target: 'https://api.bilibili.com/x/web-interface', //bvid
            changeOrigin: true
        })
    )
}