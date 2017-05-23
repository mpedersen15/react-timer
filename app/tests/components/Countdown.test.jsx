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
		it('should start countdown', (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);

			countdown.handleSetCountdown(10);

			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countdownStatus).toBe('started');

			setTimeout(() => {
				expect(countdown.state.count).toBe(9);
				done();
			},1001);

		});

		it('should not let count less than 0', (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);

			countdown.handleSetCountdown(1);

			expect(countdown.state.count).toBe(1);
			expect(countdown.state.countdownStatus).toBe('started');

			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
				done();
			},3001);

		});

		it('should pause count when status paused', () => {
			var countdown = TestUtils.renderIntoDocument(<Countdown />);
			countdown.handleSetCountdown(3);
			countdown.handleStatusChange('paused');

			setTimeout(() => {
				expect(countdown.state.count).toBe(3);
				expect(countdown.state.countdownStatus).toBe('paused');
				done();
			}, 1001);

		});

		it('should reset count when status stopped', () => {
			var countdown = TestUtils.renderIntoDocument(<Countdown />);
			countdown.handleSetCountdown(3);
			countdown.handleStatusChange('stopped');

			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
				expect(countdown.state.countdownStatus).toBe('stopped');
				done();
			}, 1001);

		});

	});
});
