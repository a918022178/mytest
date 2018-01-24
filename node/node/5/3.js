var express = require('express')
var cookieParser = require('cookie-parser')

var app =express()
app.use(cookieParser())

app.get('/',function(req,res){
    res.cookie('name','777777777777777',{maxAge:90000,httpOnly:true})
    res.send(req.cookies)
})

app.get('/a',function(req,res){
    var b = req.query.b;
    var arr =req.cookies.qqq||[];
    arr.push(b)
    res.cookie("qqq",arr)
    res.send(req.cookies)
})

app.listen(8080)
  