const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const fileName = process.argv[2];
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        res.end('Error reading file');
      } else {
        const students = data.split('\n').filter(line => line !== '');
        res.end(`This is the list of our students:\n${students.join('\n')}`);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
