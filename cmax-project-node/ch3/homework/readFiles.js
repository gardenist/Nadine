 // fs모듈 - 파일 시스템에 접근하는 모듈. 
 // 파일을 생성하거나 삭제하고, 읽거나 쓸 수 있는 파일
 // 폴더도 만들었다 지웠다 할 수 있음.
 

 const fs = require('fs');

 fs.readFile('./data.txt', (err, data)=>{
    if(err){
        throw err;
    }

    const dataString = data.toString(); // 문자화
    console.log('data :', data); //buffer (byte배열
    console.log('data string :', dataString); //string

    let lines = dataString.split('\n')
    console.log(lines)
    console.log(lines.length)
    let object = {}; // 빈 객체 생성

    for(let i = 0; i < lines.length; i++) {
        //console.log(lines[i] + '\n')
        let line = lines[i].split(':')
        
        //console.log('line0' , line[0])
        //console.log('line 1' ,line[1])
        object[line[0]] = line[1];
    }
      
    //  console.log('Object pair' , object)

    // json
       const jsonObj = JSON.stringify(object);
       console.log('jsonObj', jsonObj)
      
        // fs.write
       fs.writeFile('./data.json', jsonObj, (err) => {
         console.log(err);
         }
       )
 })
