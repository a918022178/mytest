var http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    });
    
    console.log(req.method,"method")
    if(req.method==='GET'){
                // res.write(res)
                // console.log(res)
        switch (req.url) {
            case '/':
            case '/index':
                res.end("<h1>接啊速度非常不结婚卡手机打老鼠</h1><a href='aa'>aaaa</a> <a href='bb'>bbbbb</a>");
                break;

            case '/aa':
                res.end("<h1>aaaaaaaaaaaaaaaaaaa</h1><a href='index'>index</a> <a href='bb'>bbbbb</a>");
                break;
        
            case '/bb':
                res.end("<h1>bbbbbbbbbbbbbbbbbbbb</h1><a href='index'>index</a> <a href='aa'>aaaaaaa</a>");
                break;

            default:
                res.end('<h1>404</h1>')    
        }
    }
    console.log(req)
    res.end()
}).listen(8080)