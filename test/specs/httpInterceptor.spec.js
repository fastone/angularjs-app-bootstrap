describe('HttpInterceptor', function() {
	var HttpInterceptor;

	beforeEach(function() {
		module("app");
	});

	beforeEach(inject(function(_HttpInterceptor_) {
		HttpInterceptor = _HttpInterceptor_;
	}));

	it('should have a handler for responseError', function() {
		expect(angular.isFunction(HttpInterceptor.responseError)).toBe(true);
	});

	describe('when HTTP 404', function() {
		beforeEach(function() {
			var rejection = {
				status: 404
			};
			HttpInterceptor.responseError(rejection);
		});

		it('should..', function () {
			//@TODO
		});
	});
});
