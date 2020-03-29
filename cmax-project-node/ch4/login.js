const webUtil = require('./web-util')

const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const userDb = require('./userDb');

const sessionStore = {}

http.createServer((req, res) => {
    const cookies = webUtil.parceCookies(req.headers.cookie);
    
    if(req.url.startsWith('/login')){ 
        const { query } = url.parse(req.url) //주소의 query 속성만 
        // query = "name=김나현&key=value&..."
        const { id, password } = qs.parse(query) // {name:"김나현"}
        // 데이터 베이스에서
        // Select 
        // FROM user(테이블)
        // WHERE id=${id} AND password=${password}
        
        let user = userDb.login(id, password)
        console.log(id, password)
        if(user){
            //정상적으로 보이는 경우
            const expires = new Date();
            expires.setMinutes(expires.getMinutes() + 30); 
            const sessionId = + new Date();
            sessionStore[sessionId] = {
                user, 
                expires, 
            };

            res.writeHead(302, {
                Location : '/',
                'Set-Cookie': `sessionId=${sessionId}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`},
                );

            res.end(); 
        }
        else{
            // id가 없거나 틀린 경우
            fs.readFile('./login_fail.html', (err, data)=>{
                if(err){
                    throw err;
                }
                res.end(data);
            })
        }
        

        
    } else if(cookies.sessionId && sessionStore[cookies.sessionId] && sessionStore[cookies.sessionId].expires > new Date()) {
        let {user} = sessionStore[cookies.sessionId]
        
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end(`${user.name}님 안녕하세요. ${user.id}:${user.nickname}`);

    }else{ // 만료되면 돌아감. 실행문이 실행됨 - 브라우저에서 삭제
       
        fs.readFile('./login.html', (err, data)=>{
            if(err){
                throw err;
            }
            res.end(data);
        })
    }
})
.listen(8082, () =>{
    console.log('8082번 포트에서 서버 대기중입니다.')
})
