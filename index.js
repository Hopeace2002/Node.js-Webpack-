const date = require('./date');

const now = parseInt(Date.now());
console.log(date.formatTime(now - 60));
console.log(date.formatTime(now - 600));
console.log(date.formatTime(now - 5400));
console.log(date.formatTime(now - 3600 * 23));
console.log(date.formatTime(now - 3600 * 24));
console.log(date.formatTime(now - 3600 * 24 * 3));
