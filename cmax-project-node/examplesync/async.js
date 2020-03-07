function readFile(path, callback){
    //path에 위치한 파일을 읽어옴

    //느린 작업을 시뮬레이션
    setTimeout(()=>{
        callback(path + 'Gardenist');
    },10)
    
}

console.log('Read파일 호출 전 입니다.')
readFile('example ', (data) => console.log(data));
console.log('Read파일 호출 후 입니다.')