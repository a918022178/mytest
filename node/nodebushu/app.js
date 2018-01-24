var http = require('http')
const homePage = `
<!DOCTYPE html> 
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Node.js</title>
    </head>
                <body>
                    <ul>
                        <li>
                            <a target="_blank" href="/a">电影</a>
                        </li>
                        <li>
                            <a target="_blank" href="/b">app</a>
                        </li>
                        <li>
                            <a target="_blank" href="/c">小程序</a>
                        </li>
                        <li>
                        </li>
                    </ul>
                </body>
            </html>
`
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.end(homePage)
}).listen(8080,()=>{
    console.log('listen at 8080')
})