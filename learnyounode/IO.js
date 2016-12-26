var fs = require('fs');

//sync
//var text = fs.readFileSync(process.argv[2]).toString();
//var lines = text.split('\n');

//async
fs.readFile(process.argv[2], function(error, text) {
    if (!error) {
        lines = text.toString().split('\n');
        console.log(lines.length - 1);
    }
})
