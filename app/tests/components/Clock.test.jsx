var React = require('react'),
ReactDOM = require('react-dom'),
expect= require('expect'),
$ = require('jQuery'),
TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
	it('should exist', () => {
		expect(Clock).toExist();
	});
	
	describe('formatSeconds', () => {
		it('should format seconds', () => {
			var clock = TestUtils.renderIntoDocument(<Clock/>);
			
			var seconds = 615;
			
			var expected = '10:15';
			var actual = clock.formatSeconds(seconds);
			
			expect(actual).toBe(expected);
		});
		
		it('should format seconds with leading zeros', () => {
			var clock = TestUtils.renderIntoDocument(<Clock/>);
			
			var seconds = 62;
			
			var expected = '01:02';
			var actual = clock.formatSeconds(seconds);
			
			expect(actual).toBe(expected);
		});
	});
});