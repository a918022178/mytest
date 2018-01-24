var express = require('express');
var gm = require('gm');
var formidable = require('formidable');
var fs = require('fs');
var session = require('express-session');
var router = require('./router/router')

var app = express();
app.set('view engine', 'ejs')
app.use(express.static('./public'))
app.use('/avatar',express.static('./avatar'))

app.use(session({ 
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    // cookie:{secure:true}
}))

// app.get('/', router.index)
// app.get('/regist', router.regist)
// app.post('/doregist', router.doregist)
// app.get('/login', router.login)
// app.post('/dologin', router.dologin)
app.get('/mine', router.mine)
app.post('/upload', router.upload)
// app.get('/cut', router.cut)
// app.post('/jian', router.jian)
// app.post('/tui', router.tui)
// app.post('/fa', router.fa)


app.listen(8080)