const {odd, even} = require('./var');
//require받아오기

function checkOddOrEven(num){
    if(num % 2){
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;
// 모듈이 연쇄적으로 이뤄질 수 있다.