const net = require('net');
const port = process.argv[2];

var server = net.createServer(listener);

server.listen(port);

function listener(socket) {
    data = getDate();
    socket.end(data);
}

function formatNumber(n) {
    return n < 10 ? '0' + n : n;
}

function getDate() {
    var date = new Date();
    return date.getFullYear() + '-'
        + formatNumber(date.getMonth() + 1) + '-'
        + formatNumber(date.getDate()) + ' '
        + formatNumber(date.getHours()) + ':'
        + formatNumber(date.getMinutes()) + '\n'
}
