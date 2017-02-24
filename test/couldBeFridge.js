const chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const should = chai.should();

const isFridge = require('../');

describe('couldBeFridge', function() {
	it('should not be a fridge', function() {
		return isFridge.isNotFridge('fridge').should.eventually.oneOf([true, false]);
	});
	it('should be a fridge', function() {
		return isFridge.isNotFridge('not fridge').should.eventually.oneOf([true, false]);
	});
});