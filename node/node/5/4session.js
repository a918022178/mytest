var express = require('express')
var app = express();
var session = require('express-session');

app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    // cookie:{secure:true}
}))

app.get('/',function(req,res){  
    if(req.session.login){
        res.send('hy'+req.session.name)
    }else{
        res.send('no')
    }
})

app.get('/lo',function(req,res){
    req.session.login=true;
    req.session.name='sdgdsagsdfhg';
    res.send('success')
})

app.listen(8080)