const http = require('http');
const fs = require('fs');

var port = process.argv[2];
var fileLocation = process.argv[3];

var server = http.createServer(callback);
server.listen(port);

function callback (req, resp) {
    fs.readFile(fileLocation, function(error, text) {
        if (!error) {
            resp.write(text);
        }
    });
}
