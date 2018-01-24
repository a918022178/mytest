var MongoClient = require('mongodb').MongoClient;
var crypto = require('crypto');

exports.md5=function(pass){
    var md5 = crypto.createHash('md5');
    return md5.update(pass).digest('base64')
}

function _connectDB(callback){
    var url = 'mongodb://localhost:27017/aaa';
    MongoClient.connect(url,function(err,db){
        callback(err,db)
    })
}

exports.insertOne = function(collection,json,callback){
        _connectDB(function(err,db){
            db.collection(collection).insertOne(json,function(err,result){
                callback(err,result)
                db.close()
            })
     })
}

exports.find=function(collection,json,page,callback){
    _connectDB(function(err,db){
        var cursor = db.collection(collection).find(json).limit(10).skip(10*page);
        var result = [];
        cursor.each(function(err,doc){
             if(doc!=null){
                result.push(doc)
            }else{
                callback(null,result)
            }
        })
    })
}

exports.del = function (collection, json, callback) {
    _connectDB(function(err,db){
        db.collection(collection).deleteMany(json,function(err,result){
            if(err){
                console.log('删除失败')
                return;
            }
            else{
                callback(null,result)
            }
        })
    })
}

exports.update = function (collection, json1, json2, callback) {
    _connectDB(function (err, db) {
        db.collection(collection).updateMany(json1,json2,function(err,result){
            callback(err,result)
        })
    })
}