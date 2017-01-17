const http = require('http');
const through = require('through2');


let port = process.argv[2];

let server = http.createServer(function (req, res){
    if (req.method === 'POST') {
        req.pipe(through(function (buf, _, next) {
            this.push(buf.toString().toUpperCase());
            next();
        })).pipe(res);

        // let text = [];
        // req.on('data', function(data){
        //     text.push(data);
        // }).on('end', function() {
        //     res.end(Buffer.concat(text).toString().toUpperCase());
        // });
    }
    else res.end('unsuported method');
});

server.listen(port);
