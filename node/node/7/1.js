var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/77');
var Cat = mongoose.model('Dog',{name:String});

var kitty = new Cat({name:'aaaa'});
kitty.save(function(err){
    if(err){
        console.log(err)
    }
})