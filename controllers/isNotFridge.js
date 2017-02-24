'use strict';

/*
isFridge.isNotFridge(x)
x - value
*/

const isFridge = require('./isFridge');

module.exports = (x, cb) => {
	return new Promise(function(resolve, reject) {
		isFridge(x)
			.then(function(isFridge) {
				resolve(!isFridge);
			})
			.catch(function(err) {
				reject(err);
			});
	});
};