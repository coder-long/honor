const app = require('express')

app.get('/app', (req, res) => {
    res.json({
        code: '200',
        msg: '成功l'
    })
})
