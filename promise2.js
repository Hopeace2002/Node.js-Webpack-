//promise.js Promise风格
const fs = require('fs');

function readFileAsync(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, function(err, data) {
            if(err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

readFileAsync('./data.txt').then(function(data) {
    console.log('读取data.txt成功', data);
    return readFileAsync('./data2.txt'); //返回Promise
})
.then(function(data2) {
    console.log('读取data2.txt成功', data2);
})
.then(function(err) {
    console.log('读取失败', err)
});