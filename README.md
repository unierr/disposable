# Disposable-js

A list of [disposable email addresses](http://en.wikipedia.org/wiki/Disposable_email_address)  like  `mailinator.com`. You can use it to detect  disposable email accounts.

# Installation
Simply run:
```
npm install disposable-js
```

# Examples
Detect a disposable domain
```
var disposable = require("disposable-js") //with commonjs
import disposable from 'disposable-js' //with es6

disposable.isDisposable('mailinator.com') //returns true
disposable.isDisposable('mailinator.com') //returns false
```
Get the array of all domains (currently standing at **17792** ESPs).
```
disposable.domains
```
