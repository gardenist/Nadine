const http = require('http');
// const { Url } = require('url')

// http.createServer((req, res) => {
//     // 여기에 ?
// })


http.createServer((req, res)=>{
    if(/\/post\/\d+/.test(req.url)){
        res.write('<h1>Hello Node!</h1>');
        res.end('<p>Hello Server!</p>');
    }else if(/\/login/.test(req.url)){
        res.write('<h1>Log In!</h1>');
        res.end('<script>alert("login이필요한화면입니다")</script>');
    }else{
        res.write('<h1>404 NOT FOUND<h1>')
        res.end('<p>페이지를 찾을 수 없습니다.</p>')
    }

    console.log(req.url)
    let url = new URL(req.url, `http://${req.headers.host}`);
    console.log(url)

    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(8080, () => { // 포트 요청 - 받는 포트 넘버
    console.log('8080 포트에서 서버 대기중 입니다.') 
})

// http 구조
// 요청 라인 - 주소, 버전