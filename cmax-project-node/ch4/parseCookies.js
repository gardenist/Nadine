//람다 표현식으로 표기 가능 
//쿠키가 없다면 빈 문자열 로 넣어준다. => 인자 (cookie = '')
const parceCookies = (cookie = '') => 
    cookie
    .split(';')
    .map(v => v.split("="))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k,v]) => {
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    }, {});


    //아래와 동일한 함수


function parceCookies2(cookie){
    //Cookie : theme = light; sessionToken=abc123

    if(!cookie){
        cookie = '';
    }

    //theme = light; sessionToken=abc123; a=b; c=d;
    cookie = cookie.split(';') //세미콜론 기준으로 나누기 ["theme = light", "sessionToken=abc123", ...]
    
    
    cookie.map(function(element){
        // theme = light; sessionToken=abc123;
        return element.split('=')  // ["theme", "light"]
    });

    //배열 안에 배열들이 들어간 상태.
    //[["theme", "light"], ["sessionToken", "abc123"], ["a", "b"], ..]

    cookie = cookie.map(function(element){
        // element = ["theme", "light"]

        var first = element[0] // 첫 번째 요소
        var remains = element.slice(1) //두번째 요소 ~ 나머지

        return [k, vs.join('=')]
    })

    //reduce 배열의 엘리먼트의 수를 ~ 감소시킴 sum을 위해서 리듀스 한다.
    l//let number = [1,2,3,4,5]

    //sum reduce  1+2+3... => 15
    //집합의 값을 받을 것 
    let cookieObj = cookies.reduce(function(object, array){
        // ["theme", "light"] array
        var key = array[0].trim(); //"theme" //trim은 앞 뒤 공백을 제거해줌
        var value = decodeURIComponent(array[1]); // "light"

        object[key] = value
        //{"theme":"light", "sessionToken":"abc123", "a": "b",.}
    }, {})

    return cookieObj

}

//쿠키는 키 밸류 형태 
// 2개의 쿠키 셋

//줄어든 함수

function parceCookies2(cookie=''){
    //Cookie : theme = light; sessionToken=abc123

    return cookie
    .split(';')
    .map(element => element.split('=')) 
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((object, [key, value])=> object[key.trim()] = decodeURIComponent(value), {})

}