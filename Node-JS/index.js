const http = require('http');

http.createServer((req, resp) => {
    resp.write("<h1>Hello Node JS Prasad</h1>")
    resp.end();
}).listen(5000);