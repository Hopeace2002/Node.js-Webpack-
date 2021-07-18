//streamd.js 管道流
const fs = require('fs');

// 创建读取流
const readStream = fs.createReadStream('./streamd.js', { encoding : 'utf8' });

// 创建写入流
const writeStream = fs.createWriteStream('./streame.js', { encoding : 'utf8'});

readStream.pipe(writeStream); //管道操作

writeStream.on('finish', () => {    //写入完成
    console.log('写入完成');
});