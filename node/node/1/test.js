var http = require('http'); 
var fs = require('fs');
var url = require('url');
var path = require('path');

http.createServer((req, res) =>  {
    // res.writeHead(200, "Content-Type:text/html;chartset=utf-8"); 
    var pathname = url.parse(req.url).pathname;
    var extname = path.extname(pathname);
    // res.write(pathname)
    // res.write(extname)
    if(req.url=='/favicon.ico')return
    // fs.stat('./1.js',(err,data)=>{
    //     console.log(data.isDirectory())
    // })

    fs.readFile('./mime.json',(err,data)=>{
        var obj = JSON.parse(data)
        console.log(pathname)
        fs.readFile('.'+pathname,(err,data)=>{
            if(err){
                console.log(222222222222222)
                fs.readFile('./1.html',(err,data)=>{
                    res.writeHead(404, "Content-Type:text/html;chartset=utf-8");
                    res.end(data)
                })
                return;
            }
            console.log(data)
            res.writeHead(200, "Content-Type:"+obj[extname]+";chartset=utf-8"); 
            res.end(data)
        })
    })
}).listen(8000)