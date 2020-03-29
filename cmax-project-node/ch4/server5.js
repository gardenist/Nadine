const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parceCookies = (cookie = '') => 
    cookie
    .split(';')
    .map(v => v.split("="))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k,v]) => {
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    }, {});

    const sessionStore = {};

http.createServer((req, res) => {
    const cookies = parceCookies(req.headers.cookie);
    
    if(req.url.startsWith('/login')){ 
        const { query } = url.parse(req.url) //주소의 query 속성만 
        // query = "name=김나현&key=value&..."
        const { name } = qs.parse(query) // {name:"김나현"}
        
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5); 
        const sessionId = + new Date();
        sessionStore[sessionId] = {
            name, 
            expires, 
        };

        res.writeHead(302, {
            Location : '/',
            'Set-Cookie': `sessionId=${sessionId}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`},
            );

            res.end(); 
    } else if(cookies.sessionId && sessionStore[cookies.sessionId].expires > new Date()) {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end(`${sessionStore[cookies.sessionId].name}님 안녕하세요.`);

    }else{ // 만료되면 돌아감. 실행문이 실행됨 - 브라우저에서 삭제
        fs.readFile('./server4.html', (err, data)=>{
            if(err){
                throw err;
            }
            res.end(data);
        })
    }
})
.listen(8084, () =>{
    console.log('8084번 포트에서 서버 대기중입니다.')
})
