const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(req);
})

server.listen(8443);

module.exports = server;
