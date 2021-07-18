exports.formatTime = function (timestamp) {
    const duration = parseInt(Date.now()) - timestamp;
    if (duration < 600) {
        return 'just now';
    }
    if (duration < 3600) {
        return 'only in one hour';
    }
    if (duration < 3600 * 3) {
        return 'in three hours'
    }
    if (duration < 3600 * 24) {
        return 'today';
    }
    if(duration < 3600 * 24 * 2){
        return 'before one day';
    }
    return new Date(timestamp * 1000).toString();
}