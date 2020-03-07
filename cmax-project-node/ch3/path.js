const path = require('path');

const string = __filename;

console.log('path.basename():', path.basename(string, path.extname(string)));

console.log('path.parse()', path.parse(string))