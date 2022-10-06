/**
 * import http core module
 * create server on port 3000
 * send hello world response
 */

const http = require("http");
console.log(1);
http
  .createServer(function (req, res) {
    res.end("Hello world!");
  })
  .listen(3001);
