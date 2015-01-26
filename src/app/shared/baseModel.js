/*global angular*/

(function() {
	'use strict';

	/**
	 * @name BaseModel
	 * @desc Base data model
	 *
	 */

	function BaseModel($resource) {
		return function(route, params, actions) {
			return $resource(route, params, {
				get: angular.extend({
					cache: false,
					method: 'GET'
				}, actions),
				jsonp: angular.extend({
					cache: false,
					method: 'JSONP',
					params: {
						callback: 'JSON_CALLBACK'
					}
				}, actions),
			})
		};
	}
	BaseModel.$inject = ['$resource'];

	// Module getter & factory setter
	angular
		.module('app')
		.factory('BaseModel', BaseModel);

}());
