var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//登录路由 使用express-session 简单处理登录信息 
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(res.body)
  res.json({ status: 200, data: '成功' })
  return
  let result = loginCheck(username, password);
  return result.then(data => {
    if (data.username) {
      // 设置 session
      req.session.username = data.username
      res.json({ status: 200, data: '已经登录' })
      return
    }
    res.json({ status: 200, data: '未登陆' })
  })
})

// 是否登录测试接口
router.get('/login-test', (req, res, next) => {
  if (req.session.username) {
    res.json({
      error: 0,
      msg: '已登录'
    })
  } else {
    res.json({
      error: -1,
      msg: '未登录',
      hel: 'sdhfjkhsjkfhjkshfjkshdfjk'
    })
  }
})

module.exports = router;
