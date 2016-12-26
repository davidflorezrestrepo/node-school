const fs = require('fs');
const path = require('path');

var filePath = process.argv[2];
var fileExtension = process.argv[3];

fs.readdir(filePath, function (error, dirContent){
    if (error) {
        console.log(filePath);
        console.log("there was an error reading the directory's content");
    } else {
        dirContent = dirContent.filter( x => x.match('.*\.'+fileExtension+'$'));
        for (var i = 0; i < dirContent.length; i++) {
            console.log(dirContent[i]);
        }
    }
})
