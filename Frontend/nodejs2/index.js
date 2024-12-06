// wrapper function
// function(__dirname, __filename, require) {

console.log(__dirname);
console.log(__filename);

add = require('./calculator.js');

console.log(add(2,3));

// }