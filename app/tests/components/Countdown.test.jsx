var React = require('react'),
ReactDOM = require('react-dom'),
expect= require('expect'),
$ = require('jQuery'),
TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
	it('should exist', () => {
		expect(Countdown).toExist();
	});
});