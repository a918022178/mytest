var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/77');

db.once('open',function(){
    console.log('ok')
})

var schema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    sex:{type:String},
})

schema.statics.find = function(name,callback){
     this.model('stu').find({name:name},callback)
}   

var Stu = db.model('stus',schema);

// var a = new Stu({name:'aaaa',age:122,sex:'男'});
// a.save(function(){

// })

// Stu.create({name: 'bbbb', age: 82, sex: '女'},function(){

// })
Stu.find('aaaa',function(a,b){
    console.log(a+'-------'+b)
})