const fs = require('fs');
function readFileAsynv(path) {
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

readFileAsynv('./data.txt').then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.error(err);
});