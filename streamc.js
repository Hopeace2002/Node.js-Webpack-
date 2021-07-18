//  streamb.js
const fs = require('fs');

const readStream = fs.createReadStream('./streamb.js', { encoding : 'utf8'});
const writeStream = fs.createWriteStream('./streamc.js', { encoding : 'utf8'});

readStream.on('data', (chunk) => { // 读取到小块数据就写入，占用内存低
    writeStream.write(chunk);
});

readStream.on('end', () => {    //文件读取完毕
    writeStream.end();          //写入完成
    console.log('读取完成');
});

writeStream.on('finish', () => {
    console.log('写入完成');
});

readStream.on('error', (err) => {
    console.log('读取错误', err);
});

writeStream.on('error', (err) => {
    console.log('写入错误', err);
});