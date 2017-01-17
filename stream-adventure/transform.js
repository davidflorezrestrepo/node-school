const through = require('through2');

process.stdin.pipe(
    through(function(data, enc, next) {
        data = data.toString().toUpperCase();
        this.push(data);
        next();
    })
).pipe(process.stdout);
