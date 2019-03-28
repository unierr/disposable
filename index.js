let domains = require('./domains.json');

let isDisposable = function (domain) {
    let exists = domains.find(function (item) { return domain == item });
    if (exists) return true;
    return false;
}

module.exports = {
    isDisposable,
    domains
}