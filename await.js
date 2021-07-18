function ajaxGet(url, timeout) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.timeout = timeout;

        xhr.onload = function() {
            resolve(xhr.responseText);
        }
        xhr.onerror = function (e) {
            reject(new Error('请求失败'));
        };
        xhr.ontimeout = function () {
            reject(new Error('timeout'));
        };
        xhr.send(null);
    });
}

async function getData() {
    try {
        const data = await ajaxGet('www.nudter.xyz', 1000); // 1秒超时
        console.log(data);
    } catch (e) {
        console.error(e);
    }
}
getData();