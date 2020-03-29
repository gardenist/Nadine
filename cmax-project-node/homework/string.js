//줄의 시작과 끝 감싸기
// 입력된 문자열의 각 줄에 시작과 끝 부분에 문자를 추가해주는 함수를 작성하기
/*
    text: 입력 문자열
    start: 줄의 시작 부분에 붙일 문자열
    end: 줄의 끝 부분에 붙일 문자열
*/

var text = 'Hello\nWorld!'

function wrap(text, start, end){
    let list = []
    var words = text.split('\n')

    for(var i = 0; i < words.length; i++){
        
        var word = start + words[i] + end
         
        list.push(word)
    }

    return list.join('\n')
}

let wrapped = wrap(text, '{', '}')

console.log(wrapped)

