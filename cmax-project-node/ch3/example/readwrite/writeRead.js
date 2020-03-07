const fs = require('fs');
const contents = "내용 내용 내용"

fs.writeFile('./writeme.text', contents , (err) => {
    if(err){
        throw err;
    }

})