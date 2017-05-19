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

	describe('handleSetCountdown', () => {
		it('should start countdown', () => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);

			countdown.handleSetCountdown(10);

			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countdownStatus).toBe('started');

			setTimeout(() => {
				expect(countdown.state.count).toBe(9);
			},1001);

		});

		it('should not let count less than 0', () => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);

			countdown.handleSetCountdown(1);

			expect(countdown.state.count).toBe(1);
			expect(countdown.state.countdownStatus).toBe('started');

			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
			},3001);

		});

	});
});
