let disposable = require('./index');

console.log(disposable.isDisposable('mailinator.com')); //returns true
console.log(disposable.isDisposable('gmail.com')); //returns false