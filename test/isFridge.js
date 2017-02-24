const chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const should = chai.should();

const isFridge = require('../');

describe('isFridge', function() {
	it('should be a fridge', function() {
		return isFridge.isFridge('fridge').should.eventually.equal(true);
	});
	it('should not be a fridge', function() {
		return isFridge.isFridge('not fridge').should.eventually.equal(false);
	});
});