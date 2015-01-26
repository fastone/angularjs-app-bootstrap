describe('BaseModel', function() {
	var $httpBackend, mockBaseModel;

	beforeEach(angular.mock.module('app', function($provide, $translateProvider) {
		$provide.factory('customLoader', function($q) {
			return function() {
				var deferred = $q.defer();
				deferred.resolve({});
				return deferred.promise;
			};
		});
		$translateProvider.useLoader('customLoader');
	}));

	beforeEach(function() {
		angular.mock.inject(function($injector) {
			$httpBackend = $injector.get('$httpBackend');
			mockBaseModel = $injector.get('BaseModel');
		});
	});

	it('should make get() call with api:// protocol', inject(function(BaseModel) {

		$httpBackend.expectGET('/api/index.php/method/parameter1/test/parameter2/test2')
			.respond([{
				parameter1: 'test',
				parameter2: 'test2'
			}]);

		var result = new BaseModel('api://method/parameter1/:parameter1/parameter2/:parameter2', {
			parameter1: '',
			parameter2: ''
		}, {
			isArray: true
		}).get({
			parameter1: 'test',
			parameter2: 'test2'
		});

		$httpBackend.flush();

		expect(result[0].parameter1).toEqual('test');
	}));

	it('should make get() call with normal protocol', inject(function(BaseModel) {

		$httpBackend.expectGET('http://www.example.com')
			.respond([{
				success: true,
			}]);

		var result = new BaseModel('http://www.example.com', {}, {
			isArray: true
		}).get({});

		$httpBackend.flush();

		expect(result[0].success).toEqual(true);
	}));
});
