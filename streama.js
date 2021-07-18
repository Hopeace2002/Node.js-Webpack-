//streama.js  读取流
const fs = require('fs');

let data = '';
const stream = fs.createReadStream('./streama.js', { encoding: 'utf8'});

stream.on('data', (chunk) => { // chunk 是本次读取到的数据
    data += chunk;
});

stream.on('end', () => {
    console.log(data);
});

stream.on('error', (err) => {
    console.error('读取错误', err);
});

console.log('执行完毕')