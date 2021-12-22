
// const proxy = require('http-proxy-middleware');

// //可以配置多个目标服务器
// module.exports = (app) => {
//     app.use(
//         //第一个目标服务器
//         proxy('/api1', {
//             target: 'http://loclhost:3001',
//             changeOrigin: true,
//             pathRewrite: '^/api1',
//         }),
//         //第二个目标服务器
//         proxy('/api2', {
//             target: 'http://loclhost:5000',
//             changeOrigin: true,
//             pathRewrite: '^/api2',
//         }),
//     )
// }