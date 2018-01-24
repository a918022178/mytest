var express = require('express')
var app = express()
var MongoClient = require('mongodb').MongoClient;

app.get('/',function(req,res){
    var url = 'mongodb://localhost:27017/test';
    MongoClient.connect(url,function(err,db){
        if(err){
            console.log('err')
            return
        }
        console.log('success')
        db.collection('bbb').insertOne({
            'age':parseInt(Math.random()*10000)
        },function(err,result){
            console.log(result)
            res.send(result)
        })
        db.close()
    })

})
app.listen(8080)