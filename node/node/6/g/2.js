var express = require('express');
var gm = require('gm');
var formidable = require('formidable');
var fs = require('fs');

var app = express();
app.set('view engine', 'ejs')
app.use(express.static('./public'))

app.get('/', function (req, res) {
    res.render('index')
})

app.post('/jian', function (req,res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log(fields,files)
          gm('./public/1111.png').crop(fields.w,fields.h,fields.x,fields.y)
          .write('./cut.png',function(err){
                if(err){
                    res.send(err.toString())
                }else{
                    res.send('ok')
                } 
          })    
    })
})

app.listen(8080)