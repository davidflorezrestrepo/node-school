const split = require('split');
const through = require('through2');

line = 1;

process.stdin
    .pipe(split())
    .pipe(through(function(data, enc, next) {
        if(line % 2 === 0) {
            data = data.toString().toUpperCase();
        } else {
            data = data.toString().toLowerCase();
        }
        line++;
        this.push(data+ '\n');
        next();
    })
).pipe(process.stdout);
