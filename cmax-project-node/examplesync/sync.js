function readFile(path, callback){
    //path에 위치한 파일을 읽어옴
    callback(path + 'Gardenist');
 
}

console.log('Read파일 호출 전 입니다.')
readFile('example ', (data) => console.log(data));
console.log('Read파일 호출 후 입니다.')