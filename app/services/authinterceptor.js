'use strict';

app.factory('authInterceptor', function(authToken, $q, $injector){
	return {
		request: function(config){
			var token = authToken.getToken();
			if(token){
				config.headers.Authorization = 'Bearer ' + token;
			}
			return config;
		},
		response: function(response){
			return response;
		},
		responseError: function(response){
			if(response.status === 401 || response.status === 403){
				$injector.get('$state').transitionTo('login');
			}
			return $q.reject(response);
		}
	};
});
