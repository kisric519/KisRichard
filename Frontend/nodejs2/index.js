// wrapper function
// function(__dirname, __filename, require) {

console.log(__dirname);
console.log(__filename);

add = require('./calculator.js');
console.log(add(2,3));


const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('Hello World');
})
server.listen(8080);

// }