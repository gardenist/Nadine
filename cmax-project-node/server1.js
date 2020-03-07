const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // res.write('<h1>Hello Node!</h1>');
    // res.end('<h1>Hello Server</h1>');
    fs.readFile('./ch3/readme.html', (err, data)=> {
        console.log(req.url); 
        if(err){
            throw err;
        }
        res.write(data.toString());
        res.end();//응답이 끝났다.
    });
}).listen(8080, () => {
    console.log('8080번 포트에서 서버 대기중입니다.')
})