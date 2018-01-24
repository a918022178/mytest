var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/77');

db.once('open', function () {
    console.log('ok')
})
module.exports = db; 