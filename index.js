const http = require('http')

const server = http.createServer((req, res) => {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    console.log(JSON.parse(data)); // 'Buy the milk'
    res.end('<h1>Hello</h1>');
  });
})

server.listen(8443);

module.exports = server;
