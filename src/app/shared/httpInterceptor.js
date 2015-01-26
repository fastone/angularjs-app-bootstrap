/*global angular*/

(function() {
	'use strict';

	function HttpInterceptorProvider() {

		var apiProtocolRegex = /^api?:\/\//,
			apiSettings = {},
			self = this;

		function _request(config) {
			if (apiProtocolRegex.test(config.url)) {
				config.url = config.url.replace(
					apiProtocolRegex,
					apiSettings.api
				);
			}
			return config;
		}

		function _response(response) {
			return response;
		}

		function _responseError(response) {
			return response;
		}

		function get($rootScope, $timeout) {
			return {
				request: _request,
				response: _response,
				responseError: _responseError
			};
		}
		get.$inject = ['$rootScope', '$timeout'];

		function use(settings) {
			angular.extend(apiSettings, settings);
			return self;
		}

		return {
			$get: get,
			use: use
		};
	}
	HttpInterceptorProvider.$inject = [];

	// Module getter & factory setter
	angular
		.module('app')
		.provider('HttpInterceptor', HttpInterceptorProvider);

}());
