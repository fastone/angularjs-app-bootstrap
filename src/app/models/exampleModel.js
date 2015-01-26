/*global angular*/

(function() {
	'use strict';

	function ExampleModel(BaseModel) {

		// Test api will return object {'content':'<testvalue>'}
		var Model = new BaseModel('api://method/parameter1/:parameter1/parameter2/:parameter2', {
			parameter1: '',
			parameter2: ''
		}, {
			isArray: false
		});

		// Add ( per record ) functions to be used in ngRepeat loops
		angular.extend(Model.prototype, {});

		return Model;
	}
	ExampleModel.$inject = ['BaseModel'];

	// Module getter & factory setter
	angular
		.module('app')
		.factory('ExampleModel', ExampleModel);

}());
