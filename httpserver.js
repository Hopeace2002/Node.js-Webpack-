// httpserver.js
const http = require('http'); //导入HTTP模块

// 创建HTTP服务器，req为请求对象，resp为响应对象
const server = http.createServer((req, resp) => {
    resp.end(JSON.stringify(req.headers));
});

server.listen(8080, () => console.log('listen on 8080')); //监听8080端口
// 本地浏览器运行localhost:8080即可查看相关信息