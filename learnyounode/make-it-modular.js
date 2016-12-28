const mymodule = require('./mymodule');

var filePath = process.argv[2];
var fileExtension = process.argv[3];

mymodule(filePath, fileExtension, function(error, dirContent) {
    for (var i = 0; i < dirContent.length; i++) {
        console.log(dirContent[i]);
    }
});
