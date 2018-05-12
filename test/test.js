'use strict';

const expect = require('chai').expect;
const arrayConverter = require('../index');

describe('#arrayConverter', function() {
	it('should work', function() {
		const result = arrayConverter([]);
		expect(result).to.equal('');
	});
});