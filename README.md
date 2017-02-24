# isFridge
Painstakingly written over years and years of work by Connor McFarlane.

[![CircleCI](https://circleci.com/gh/ConnorMcF/node-isfridge.svg?style=svg)](https://circleci.com/gh/ConnorMcF/node-isfridge)

Installation
----
```
$ npm i isfridge -s
```

```js
var isFridge = require('isfridge');
```

## Usage

### isFridge(x)

Takes one value to compare, returns a promise, boolean on resolve, error on reject.

```js
isFridge.isFridge("fridge")
	.then(function(fridge) {
		if(fridge) {
			console.log("It is a fridge!")
		} else {
			console.log("It is not a fridge!")
		}
        // It is a fridge!
	});
```

### isNotFridge(x)

Takes one value to compare, returns a promise, boolean on resolve, error on reject.

```js
isFridge.isNotFridge("not fridge")
	.then(function(fridge) {
		if(fridge) {
			console.log("It is not a fridge!")
		} else {
			console.log("It is a fridge!")
		}
        // It is not a fridge!
	});
```

### couldBeFridge(x)

Takes one value to compare, returns a promise, boolean on resolve, error on reject.

```js
isFridge.couldBeFridge("not fridge")
	.then(function(fridge) {
		if(fridge) {
			console.log("It could be a fridge!")
		} else {
			console.log("It still could be a fridge!")
		}
        // It could be a fridge!
        // OR
        // It still could be a fridge!
	});
```

## Test

Unit tests are run through mocha.

### Running unit tests

```
$ npm test
```

https://connormcf.com
