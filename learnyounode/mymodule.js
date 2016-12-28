const fs = require('fs');

function readDirectory(directory, extension, done){
    fs.readdir(directory, function (error, dirContent){
        if (error) {
            done(error);
        } else {
            dirContent = dirContent.filter( x => x.match('.*\.'+extension+'$'));
            done(null, dirContent);
        }
    });
}

module.exports = readDirectory;
