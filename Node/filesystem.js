// Create Files:(1).appendFile()
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'hello content!', function (err) {
    if (err) throw err;
    console.log("saved!");
});

//(2).open()
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err) {
    if (err) throw err;
    console.log("saved!");
});

//(3).writeFile()
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'hello content!', function (err) {
    if (err) throw err;
    console.log("saved!");
});

// Delete Files()
var fs = require('fs');

fs.unlink('mynewfile3.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});

// Rename Files()
var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log("File Renamed");
});

