var express = require('express')
var app = express()
var formidable = require('formidable')
var crypto = require('crypto'); 

var db = require('./db')

app.set('view engine', 'ejs')

app.get('/regist',function(req,res){
    res.render('regist')
})

app.get('/login',function(req,res){
    res.render('login')
})

app.post('/po',function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
        var md5 = crypto.createHash('md5');
        var name = fields.name;
        var pass = md5.update(fields.pass).digest('base64')
        console.log(fields,files)
        db.find('use',{'name':name},0,function(err,result){
            if(result.length==0){
                db.insertOne('use',{'name':name,'pass':pass},function(err,result){
                    res.json('注册成功')
             })
            }else{ 
                res.json('用户已存在')
            }
            
        })
        
    })
})

app.post('/deng',function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
         var md5 = crypto.createHash('md5');
        var name = fields.name;
        var pass = md5.update(fields.pass).digest('base64')
        console.log(fields,files)
        db.find('use',{'name':name},0,function(err,result){
            if(result.length==0){
                res.json('用户名不存在')
            }else{
                if(pass!=result[0].pass){
                    res.json('密码错误')
                }else{
                    res.json('登录成功')
                }
            }
        })
    })
})

app.get('/vue',function(req,res){
    res.json('密码错误')
})

app.listen(8080)