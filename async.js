// async.js
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

//依次读取文件
async function readFiles() {
    try {
        const data1 = await readFileAsync('./data.txt');
        const data2 = await readFileAsync('./data2.txt');
        console.log('文件1的内容：', data1);
        console.log('文件2的内容：', data2);        
    } catch(e) {
        console.error('读取失败', e);
    }
}

readFiles();