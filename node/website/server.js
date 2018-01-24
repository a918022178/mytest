var http = require('http'); 
var fs = require('fs')
var qs = require('querystring')

var websites = [];
http.createServer((req, res) =>  {
    res.writeHead(200,  {"Content-Type":"text/html;charset=utf-8"}); 
    var postData = ''; 
    if (req.method === "GET") {
        switch (req.url) {
            case '/index':
            case '/':
                fs.readFile('index.html', (err, data) =>  {
                    if (err)throw err
                    res.end(data.toString())
                })
                break; 

            case '/add':
                fs.readFile('add.html', (err, data) =>  {
                    if (err)throw err
                    res.end(data.toString())
                })
                break; 

            case '/remove':
                fs.readFile('remove.html', (err, data) =>  {
                    if (err)throw err
                    res.end(data.toString())
                })
                break; 

            case '/find':
                fs.readFile('find.html', (err, data) =>  {
                    if (err)throw err
                    res.end(data.toString())
                })
                break; 

            case '/edit':
                fs.readFile('edit.html', (err, data) =>  {
                    if (err)throw err
                    res.end(data.toString())
                })
                break; 
        
            default:
            res.end("<h1>404</h1>")
                break; 
        }
    }else if (req.method === "POST") {
        switch (req.url) {
            case '/add.js':
            
                req.on('data', (chunck) =>  {
                    postData += chunck;
                })
                req.on('end',()=>{
                    var website = qs.parse(postData)
                    websites.push(website)
                    console.log(websites)
                    res.end(JSON.stringify(websites))
                })
                break; 
        
            default:
                break; 
        }
    }
}).listen(8080)