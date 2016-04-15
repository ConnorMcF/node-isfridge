# isFridge
Painstakingly written over years and years of work by Connor McFarlane.
---

How to Use
----
```
npm install isfridge --save
```
```js
var isFridge = require('isfridge');
var string = "fridge";
if(string.isFridge) {
	console.log(string + " is fridge.");
} else {
	console.log(string + " is not fridge.");
}
string = "not a fridge";
if(string.isFridge) {
	console.log(string + " is fridge.");
} else {
	console.log(string + " is not fridge.");
}
```
Output
```
fridge is fridge.
not a fridge is not a fridge.
```

https://connormcf.com
