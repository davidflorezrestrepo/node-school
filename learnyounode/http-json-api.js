const http = require('http');
const url = require('url');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url);
    var dateTime = urlObj.query.split('iso=')[1];
    if (urlObj.pathname === '/api/parsetime'){
        res.end(getTime(dateTime).toString());
    } else if (urlObj.pathname === '/api/unixtime'){
        res.end(getUnixTime(dateTime).toString());
    } else {
        return res.end('error 404');
    }
});

server.listen(port);

function getTime(dateTime) {
    var date = new Date(dateTime);
    var dateObj = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    }
    return JSON.stringify(dateObj);
}

function getUnixTime(dateTime) {
    var date = new Date(dateTime);
    var dateObj = {
        unixtime: date.getTime()
    }
    return JSON.stringify(dateObj);
}
