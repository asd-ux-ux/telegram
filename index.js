const http = require('http')

const server = http.createServer((req, res) => {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    console.log(JSON.parse(data)); // 'Buy the milk'
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1>');
  });
})

server.listen(8443);

module.exports = server;
