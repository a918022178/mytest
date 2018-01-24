var http = require('http'); 
var fs = require('fs');
var url = require('url');
var path = require('path');

http.createServer((req, res) =>  {
    res.writeHead(200, "Content-Type:text/plain;chartset=utf-8");
    var pathname = url.parse(req.url).pathname;
    var extname = path.extname(pathname);
    res.write(pathname)
    res.write(extname)
    if(req.url=='/favicon.ico')return
    // fs.stat('./1.js',(err,data)=>{
    //     console.log(data.isDirectory())
    // })
    fs.readdir('./a', (err, files) =>  {
        console.log(files)
        // res.write(JSON.stringify(data))
        var arr = [];
        (function qq(i) {
            if (i == files.length){
                console.log(arr)
                return;
            };
            fs.stat('./a/' + files[i], (err, data) =>  {
                if (data.isDirectory()) {
                    arr.push(files[i])
                    // console.log(arr,11111111111)
                }
                qq(i+1)
            })
        })(0)
        res.end()
    })
}).listen(8000)