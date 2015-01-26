describe('Application', function() {

	beforeEach(function() {
		module("app");
	});

	describe('HomeController', function($controller) {

		it('should have a HomeController controller', inject(function($controller) {
			var ctrl = $controller('HomeController');
			expect(ctrl).toBeDefined();
		}));
	});

});

