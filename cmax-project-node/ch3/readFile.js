const fs = require('fs');

fs.readFile('./readme.txt', (err, data)=> {
    if(err){ // 있으면
        throw err;
    }
    console.log(data);
    console.log(data.toString());
})