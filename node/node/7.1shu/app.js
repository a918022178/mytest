var express = require('express');
var db = require('./model/shu');
var router = require('./router/router');

var app = express();
app.set('view engine','ejs')

app.get('/',router.index)

app.get('/add',router.add)

app.get('/doadd',router.doadd)

app.get('/update', router.update)

app.get('/doupdate', router.doupdate)

app.listen(8080)