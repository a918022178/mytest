var fs = require('fs'),
    gm = require('gm');

gm('./img/1.jpg')
    .resize(700,700)
    .write('./1111.png',function(err){
        if(!err){
            console.log('ok')
            return;
        }
    })

// gm('./img/1.jpg')
//     .crop(300,200,600,500)
//     .write('./1111.png',function(err){
//         if(!err){
//             console.log('ok')
//             return;
//         }
//     })