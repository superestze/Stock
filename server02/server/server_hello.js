"use strict";
exports.__esModule = true;
var http = require("http");
var server = http.createServer(function (requires, response) {
    response.end("hello world");
});
server.listen(8000);
