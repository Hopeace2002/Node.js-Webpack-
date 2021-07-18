// CSDN一张图片的地址：https://img-home.csdnimg.cn/images/20210716103807.jpg
// https协议
const https = require('https');
const fs  = require('fs');

const req = https.request('https://img-home.csdnimg.cn/images/20210716103807.jpg', (response) => {
    console.log('响应状态码', response.statusCode);
    response.pipe(fs.createWriteStream('./logo.jpg')); //通过管道流保存图片
});

req.end(); //发出请求