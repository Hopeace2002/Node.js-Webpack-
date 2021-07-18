const fs = require('fs');
fs.readFile('./data.txt', function(err, data) {
    if(err) {
        console.log('读取错误', err);
        return;
    }
    console.log(data);
});