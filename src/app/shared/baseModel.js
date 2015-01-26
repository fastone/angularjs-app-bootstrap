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
			if (actions.method !== undefined && actions.method !== 'JSONP') {
				return $resource(route, params, {
					get: angular.extend({
						cache: false
					}, actions)
				});
			} else {
				return $resource(route, angular.extend({
					callback: 'JSON_CALLBACK'
				}, params), {
					get: angular.extend({
						method: 'JSONP',
						cache: false
					}, actions)
				});
			}
		};
	}
	BaseModel.$inject = ['$resource'];

	// Module getter & factory setter
	angular
		.module('app')
		.factory('BaseModel', BaseModel);

}());
