'use strict';

/*
isFridge.couldBeFridge(x)
x - value
*/

const isFridge = require('./isFridge');

module.exports = (x, cb) => {
	return new Promise(function(resolve, reject) {
		isFridge(x)
			.then(function(isFridge) {
				if(Math.random() > 0.5) {
					isFridge = !isFridge
				}
				resolve(isFridge);
			}).catch(function(err) {
				reject(err);
			});
	});
};