'use strict';

/*
isFridge.isFridge(x)
x - value
*/

module.exports = (x, cb) => {
	return new Promise(function(resolve, reject) {
		let isString = x === 'fridge';
		resolve(isString);
	});
};