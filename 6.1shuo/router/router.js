var formidable = require('formidable');
var db = require('../db');
var gm = require('gm');
var fs = require('fs');

// exports.index = function (req,res,next) {
//     var name = req.session.name||'';
//     db.find('shuo',{"name":name},0,function(err,result){
//         var avatar;
//         if(result.length){
//             avatar = result[0].avatar;
//         }else{
//             avatar = '1.jpg';
//         }
//         db.find('txt',{},0,function(err,result2){
//             res.render('index',{"login":name,"name":name,"avatar":avatar,"txts":result2});
//         })
        
//     })
    
// }

// exports.regist = function (req,res,next) {
//     res.render('regist');
// }

// exports.doregist = function (req,res,next) {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//         console.log(fields,files,db.md5)
//         db.find('shuo',{"name":fields.name},0,function (err,result) {
//             console.log(result)
//             if(result.length){
//                 res.send('用户名已存在');
//                 return; 
//             }else{
//                 var pass = db.md5(fields.pass)
//                 db.insertOne('shuo',{"name":fields.name,"pass":pass,"avatar":"1.jpg"},function(err,result){
//                     if(!err){
//                         req.session.login = true;
//                         req.session.name = fields.name;
//                         // req.session.avatar = '1.jpg';
//                         res.send('注册成功');
//                     }
//                 })
//             }
//         })
//     })
// }

// exports.login = function (req,res,next) {
//     res.render('login');
// }

// exports.dologin = function (req,res,next) {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//         console.log(fields.name)
//         db.find('shuo',{"name":fields.name},0,function (err,result){
//             if(!result.length){
//                 res.send('用户不存在');
//                 return;
//             }else if(db.md5(fields.pass)==result[0].pass){
//                 req.session.login=true;
//                 req.session.name=fields.name;
//                 // req.session.avatar=result[0].avatar;
//                 res.send('登录成功');
//             }else{
//                 res.send('密码错误');
//             }
//         })
//     })
// }

exports.mine = function (req,res,next) {
    res.render('mine')
}

exports.upload = function(req,res){
     var form = new formidable.IncomingForm();
     form.uploadDir=__dirname+'/../'+'/avatar';
    form.parse(req, function (err, fields, files) {
        var oldname = files.tou.path;
        var newname = __dirname+'/../'+'/avatar/'+req.session.name+'.jpg'
        fs.rename(oldname,newname,function(err){
            if(!err){
                // res.redirect('/cut')
            }
        })
    })
}

// exports.cut = function (req, res, next) {
//     req.session.avatar = req.session.name+'.jpg'
//     res.render('cut',{"name":req.session.name})
// }

// exports.jian = function (req,res) {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//         var filename = req.session.avatar;
//         console.log(fields,files,filename)
//           gm('./avatar/'+filename).crop(fields.w,fields.h,fields.x,fields.y)
//           .resize(100,100,'!')
//           .write('./avatar/'+filename,function(err){
//                 if(err){
//                     console.log(err)
//                     res.send(err.toString())
//                 }else{
//                     db.update('shuo',{"name":req.session.name},{$set:{"avatar":filename}},function(err,result){
//                         console.log(err)
//                     })
//                     res.send('ok')
//                 }
//           })    
//     })
// }

// exports.tui = function(req,res){
//     req.session.name = '';
//     res.send('ok')
// }

// exports.fa = function (req,res,next) {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//         console.log(fields,files)
//         var name = req.session.name;
//         var txt = fields.txt;
//         db.insertOne('txt',{"name":name,"txt":txt},function(err,result){
//                     if(!err){
//                         res.send('发表成功');
//                     }
//                 })
//     })
// }