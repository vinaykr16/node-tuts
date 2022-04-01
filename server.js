const http = require('http');

const dataController = (req, resp) => {
    resp.write("<h1>hello, this is vinay kumar</h1>");
    resp.end();
}

http.createServer(dataController).listen(4500);