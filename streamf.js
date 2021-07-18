//streame.js
var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('./streamf.js')  //创建读取流
.pipe(zlib.createGzip())            //创建gzip Transform流
.pipe(fs.createWriteStream('./streamg.js.gz'));     //创建写入流

console.log("文件压缩完成。");