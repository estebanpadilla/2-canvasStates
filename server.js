const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = '127.0.0.1';
const filename = 'index.html';

fs.readFile(filename, function (err) {
    if (err) {
        throw err;
    }

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html')
        res.write(html);
        res.end();
    });

    server.listen(port, hostname, () => {
        console.log('server running on port' + port);
    });
});