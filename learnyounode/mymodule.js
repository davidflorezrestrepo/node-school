const fs = require('fs');
const path = require('path');

function readDirectory(directory, extension, callback){
    return fs.readdir(directory, function (error, dirContent){
        if (error) {
            return callback(error);
        } else {
            dirContent = dirContent.filter( x => x.match('.*\.'+extension+'$'));
            callback(null, dirContent);
        }
    });
}

module.exports = readDirectory;
