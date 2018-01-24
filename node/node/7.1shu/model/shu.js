var mongoose = require('mongoose');
var db = require('./db')
var schema = new mongoose.Schema({
    name:{type:String},
    author:{type:String},
    price:{type:Number},
    // type:{type:Array},
})

// schema.statics.find = function (callback) {
//     this.model('shu').find({}, callback);
// };

var Book = db.model('shu',schema);
module.exports = Book;