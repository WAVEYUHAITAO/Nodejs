// This code reads a file named 'a.txt' using the Node.js 'fs' module
var fs = require('node:fs');
// console.log(fs);
fs.readFile('./docs/a.txt', 'utf8', function(err, data) {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
    });