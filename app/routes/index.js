var express = require('express');
var router = express.Router();
const fs = require('fs')
const multiparty = require("multiparty")

// 路由里面的文件上传 

let changedName1 = ''

const multer = require('multer')

let upload = multer({
    storage: multer.diskStorage({//此处是文件上传位置
        destination: function (req, file, cb) {
            cb(null, 'E:\\my-react\\app\\file');
        },
        filename: function (req, file, cb) {//此处是文件上传是名字修改
            var changedName = (new Date().getTime()) + '-' + file.originalname;
            changedName1 = changedName
            cb(null, changedName);
        }
    })
})
//文件长传路由接口 指定上传的文件的key 前端的formdata中append（param.append(
//     "uploadDataFile",
//     this.fileList[0].raw,
//     this.fileList[0].name
//   );）

router.post('/upload', upload.single('uploadDataFile'), (req, res) => {
    res.json({
        status: 200,
        data: {
            filename: changedName1,
            hei: '170'
        }
    })
})

router.post('/downLoad', (req, res) => {
    // console.log(1, res.download(file))
    // var filename = req.body.filename;
    // var oldname = req.body.oldname;
    var file = 'E:\\my-react\\app\\file\\1624187620148-何龙简历15984502217.pdf';
    // res.download('E:\my-react\app\file\1624187620148-何龙简历15984502217.pdf')
    // res.download(file)
    fs.readFile(file, "binary", function (err, file) {
        if (err) {
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });
            console.log("读取文件错误");
            res.end(err);
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html;application/force-download',
                'Content-Disposition': 'attachment; filename=name'
            });
            console.log("读取文件完毕，正在发送......");

            res.write(file, "binary");

            res.end();
            console.log("文件发送完毕");
        }
    });
})



/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/hel', (req, res) => {
    console.log(req.body);
    res.json({
        status: 200,
        data: {
            naem: 'hel',
            hei: '170'
        }
    })
})



module.exports = router;
