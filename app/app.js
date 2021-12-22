var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
let cors = require('cors')
// const multer = require('multer')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// let upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, 'E:\\my-react\\app\\file');
//         },
//         filename: function (req, file, cb) {
//             var changedName = (new Date().getTime()) + '-' + file.originalname;
//             cb(null, changedName);
//         }
//     })
// }) 

// app.use(upload.any());//此处直接使用文件上传中间件  针对全部文件上传，无限制条件

//设置跨域访问
// app.all('*', (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type,token,Accept");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   if (req.method.toLowerCase() == 'options') {
//     res.sendStatus(200);  // 让options尝试请求快速结束
//   } else {
//     next()
//   }
// });
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//处理session
// app.use(session({ // 执行传入对应参数
//   secret: 'CcWc#1993_28', // 随便定义，用来生成cookie的密钥
//   cookie: {
//     path: '/', // 默认配置
//     httpOnly: true, // 默认配置
//     maxAge: 24 * 60 * 60 * 1000 // cookie的生效时间 时 * 分 * 秒 * 毫秒
//   }
// }))
//处理session my
app.use(session({ //
    secret: "gaongaoge",//生成唯一的令牌要加密 这个就是加密的密钥
    resave: false,//中间如果session数据被修改，不能重新设置到前端的cookie里面
    rolling: true, //每次请求都重置 cookie的设置
    cookie: {
        maxAge: 10000 * 1000 * 3600,
        secure: false, // 如果为true ，这个cookie的设置只能是 https
        sameSite: "lax", // 允许三方访问cookie否
        httpOnly: true //只能在http协议下 访问 cookie
    }
}))


app.use('/', indexRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
