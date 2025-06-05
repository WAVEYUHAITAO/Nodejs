// This code reads a file named 'a.txt' using the Node.js 'fs' module
// and appends '8888' to its content, then writes the updated content back to the same file.
const fs = require('node:fs');
fs.readFile('./docs/a.txt','utf-8', function(err, data){
    if(!err){
        let newData = data + '\n' + '8888';
        fs.writeFile('./docs/a.txt', newData, 'utf-8', function(err) {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('追加内容成功.');
        });
    }
})