var http  = require('http');
var url = require('url');
var fs = require('fs')
http.createServer((req,res)=>{
    res.writeHead(200,"Content-Type:text/plain;chartset=utf-8");
    var pathurl = req.url
    var path = url.parse(req.url,true).query;
    res.write(pathurl)
    res.end(JSON.stringify(path))
}).listen(8000)