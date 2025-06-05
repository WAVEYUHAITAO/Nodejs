var fs = require('node:fs');
fs.writeFile('./docs/output.txt',
    'Hello, this is a test write operation using Node.js.',
    'utf8',
    function(err) {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File written successfully.');
    }
);