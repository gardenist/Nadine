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

    http.createServer((req, res) => {
        const cookies = parceCookies(req.headers.cookie);
        //console.log(cookies)
        //console.log(req.headers.cookie)
        if(req.url.startsWith('/login')){ //login으로 접속했다면,  form action='/login' = 전송된 주소 = 로그인 버튼을 눌렀을 때,
            const { query } = url.parse(req.url) //주소의 query 속성만 
            // query = "name=김나현&key=value&..."
            const { name } = qs.parse(query) // {name:"김나현"}
            
            const expires = new Date(); //쿠키의 만료기간 - date 객체 ; 그 실행된 순간이 멈춰 있음 
            expires.setMinutes(expires.getMinutes() + 5); // 3:05:52 -  쿠키의 유효기간을 요청한 시간으로부터 5분뒤까지로 한다.!!!
            res.writeHead(302, {
                Location : '/',
                'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`
            });

            res.end(); // 요청 끝  --  리다이렉트네 ? 로케이션을 보자.   / 로 이동하네  else if 로 ㄱ ㄱ
        } else if(cookies.name) {
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8'
            });
            res.end(`${cookies.name}님 안녕하세요.`);

        }else{ // 만료되면 돌아감. 실행문이 실행됨 - 브라우저에서 삭제
            fs.readFile('./server4.html', (err, data)=>{
                if(err){
                    throw err;
                }
                res.end(data);
            })
        }
    })
    .listen(8083, () =>{
        console.log('8083번 포트에서 서버 대기중입니다.')
    })
