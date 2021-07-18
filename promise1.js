// callback.js 回调风格
const fs = require('fs');

fs.readFile('./data.txt', 'utf8', function(err, data) {
    if(err) {
        console.log('读取data1出错', err);
        return;
    }
    console.log('读取data1成功', data);

    fs.readFile('./data2.txt', 'utf8',function(err, data2) {
        if(err) {
            console.log('读取data2出错', err);
            return;
        }
        console.log('读取data2成功', data2);
    });
});