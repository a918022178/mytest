var express = require('express');
var app = express()
var router = require('./controller')

app.set('view engine','ejs')
app.use(express.static('./public'))
app.use(express.static('./uploads'))
app.get('/',router.index)
app.get('/up',router.up)
app.post('/up',router.post)
app.get('/:name',router.album)
app.use(function(req,res){
    res.end('404')
})

app.listen(8080)