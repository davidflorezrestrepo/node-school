const http = require('http');

let req = http.request({method: 'POST', hostname: 'localhost', port:8099 }, function (res) {
    res.pipe(process.stdout);
})
process.stdin.pipe(req);
