const http = require('http');

const server = http.createServer((req, res) => {
  const target = `http://localhost:3000${req.url || '/'}`;
  res.writeHead(302, {
    Location: target,
    'Cache-Control': 'no-cache',
  });
  res.end(`Redirecting to ${target}`);
});

server.listen(5173, '0.0.0.0', () => {
  console.log('Redirector active: http://localhost:5173 -> http://localhost:3000');
});
