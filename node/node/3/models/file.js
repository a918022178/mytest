var fs = require('fs')

exports.getalbum=function(callback){
    fs.readdir('./uploads',function (err,files) {
        var allalbum = [];
        (function aaa(i){
            if(i==files.length) {
                console.log(allalbum)
                callback(allalbum)
                return;
            };
            fs.stat('./uploads/'+files[i],function(err,stats){
                if(stats.isDirectory()){
                    allalbum.push(files[i])
                }
                aaa(i+1)
            })
        })(0)
     })
}
exports.getimg=function(name,callback){
    fs.readdir('./uploads/'+name,function (err,files) {
        var allimg = [];
        (function aaa(i){
            if(i==files.length) {
                console.log(allimg)
                callback(allimg)
                return;
            };
            fs.stat('./uploads/'+name+'/'+files[i],function(err,stats){
                if(stats.isFile()){
                    allimg.push(files[i])
                }
                aaa(i+1)
            })
        })(0)
     })
}