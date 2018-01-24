var db = require('../model/shu')

exports.index = function(req,res){
    db.find({},function(err,result){
        res.render('index',{"list":result})
    })
}

exports.add = function(req,res){
    res.render('add')
}

exports.doadd = function(req,res){
    db.create(req.query,function(err,result){
        // console.log(req.query)
        res.redirect('/')
    })
}

exports.update = function(req,res){
    db.find({"name":req.query.name},function(err,result){
        res.render('update',{"result":result})
    })
}

exports.doupdate = function(req,res){
    db.update({"name":req.query.name},req.query,function(err,result){
        console.log(req.query)
        res.redirect('/')
    })
}