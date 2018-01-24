var express = require('express')
var app = express()
app.set('view engine','ejs')
var db = require('./model/db')
var session = require('express-session');
var crypto = require('crypto')

app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    // cookie:{secure:true}
}))

app.get('/',function(req,res){
    if(req.session.login){
        res.send('hy'+req.session.name)
    }else{
        res.send('no')
    }
})
app.get('/login',function(req,res){
    res.render('dl')
})

app.get('/check',function(req,res){
    var name = req.query.name;
    var txt = req.query.txt;
    db.find('liuyan',{"name":name},0,function(err,result){
        if(result.length==0){
            res.send('用户不存在')
            return;
        }else if(txt!=result[0].txt){
            res.send('密码错误')
            return;
        }
        req.session.login='1';
        req.session.name=name;
        res.send('ok')
        
    })
})

app.listen(8080)