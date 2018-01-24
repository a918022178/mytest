var express = require('express')
var app = express()
var aa = require('./model/db')

app.get('/',function(req,res,next){
    aa.insertOne('aaa',{"age":parseInt(Math.random()*10000)},function(err,result){
        // if(err){
        //     next();
        //     conso1.log(11111)
        //     return;
        // }
        res.send(result)
    })
})

app.get('/du',function(req,res){
    var page = req.query.page-0;
    var arr = [];
    aa.find('aaa',{},page,function(err,result){
        // for(var i =10*page;i<10*(page+1);i++){
        //     arr.push(result[i])
        // }
        res.send(result)
    })
})

app.get('/de',function(req,res){
    aa.del('aaa',{"age":{$lt:1000}},function(err,result){
        res.send(result)
    })
})

app.get('/gai',function(req,res){
    aa.update('aaa',{"age":3333},{$set:{"name":3333}},function(err,result){
        res.send(result)
    })
})



app.listen(8080)