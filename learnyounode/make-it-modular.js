const mymodule = require('./mymodule');

var filePath = process.argv[2];
var fileExtension = process.argv[3];

mymodule(filePath, function (error, dirContent){
    if (error) {
        return callback(error);
    } else {
        for (var i = 0; i < dirContent.length; i++) {
            console.log(dirContent[i]);
        }
    }
})
