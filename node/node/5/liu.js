var express = require('express')
var app = express()
var formidable = require('formidable')
var aa = require('./model/db')

app.use(express.static('./public'))
app.set("view engine","ejs")

app.get('/',function(req,res){
     aa.find('liuyan',{},0,function(err,result){
        res.render('index',{"result":result})
        //  res.send(result)
     })
})
app.post('/ti',function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fileds,files){
        console.log(fileds,files)
        aa.insertOne('liuyan',fileds,function(err,result){
            // aa.find('liuyan',{},function(err,result){
                res.json('ok')
                res.redirect('/')
            // })
        })
    })
})

app.listen(8080)