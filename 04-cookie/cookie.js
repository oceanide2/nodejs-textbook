const http = require('http');

const app = http.createServer((req, res) => {
  console.log(req.url, req.headers.cookie);
  res.writeHead(200, { 'set-cookie': 'mycookie=test' });
  res.end('Hello, Cookie');
});

app.listen(8083, () => {
  console.log('8083번 포트에서 서버 대기 중입니다');
});
