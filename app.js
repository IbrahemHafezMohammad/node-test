const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    // process.exit();
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>form</title></head>');
        res.write(`<body>
        <form action="/message" method="POST">
        <input type="text" name="message">
        <button type="submit">send</button>
        <form>
        </body>
        `);
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log('chunk', chunk);
            body.push(chunk);
        });
        console.log('after reading chunk');
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log('parsed body', parsedBody);
            const message = parsedBody.split('=')[1]
            fs.writeFile('messge.txt', message, () => {
                console.log('writing file');
                res.writeHead(302, { 'Location': '/' });
                // res.statusCode = 302;
                // res.setHeader('Location', '/');
                return res.end();
            });
            console.log('after writing file');
        })
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>test nod.js</title></head>');
    res.write('<body><h1>some text to test</h1></body>');
    res.write('</html>');
});

server.listen(3000);