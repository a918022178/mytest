var file = require('../models/file.js')
var formidable = require('formidable')
var path = require('path')
var fs = require('fs')

exports.index=function(req,res,next){
    file.getalbum(function(allalbum){
        res.render('index',{'album':allalbum})
    })
}
exports.album=function(req,res,next){
    var name = req.params.name;
    file.getimg(name,function(img){
        // if(err){
        //     next();
        //     return;
        // }
        res.render('img',{'img':img,'name':name})
    })
}
exports.up=function(req,res,next){
    file.getalbum(function(allalbum){
        res.render('up',{'album':allalbum})
    })
    // file.getimg(name,function(img){
    //     res.render('up',{})
    // })
}
exports.post=function(req,res){
    var form = new formidable.IncomingForm();
    form.uploadDir=__dirname+'/../uploads/';

    form.parse(req,function(err,fileds,files){
        console.log(fileds,files)
        res.end('111111111111')
        var oldname = files.wenjian.path;
        var newname = __dirname + '/../uploads/' + fileds.wenjianjia+'/' + files.wenjian.name;
        fs.rename(oldname,newname,function(err){

        })
        // res.writeHead(200,{'content=type':'text/plain'});
        // res.write('received upload:\n\n');
        // res.end(util.inspect({fields:fields,files:files}));
    })

}