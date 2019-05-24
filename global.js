const path = require('path'); // path is a global module
console.log(__dirname);
console.log(__filename);
console.log(`The name of this file is ${path.basename(__filename)}`);