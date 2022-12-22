'use strict';

app.service('auth', function($http, API_URL, authToken){

	function authSuccessfull(res){
		authToken.setToken(res.token);
	}
	
	this.register = function(nombre, email, password){
		return $http.post(API_URL + 'auth/register', {
			nombre: nombre,
			email: email,
			password: password
		})
		.success(authSuccessfull);
	}

	this.login = function(email, password){
		return $http.post(API_URL + 'auth/login', {
			email: email,
			password: password
		})
		.success(authSuccessfull);
	}

});

