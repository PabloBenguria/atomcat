'use strict';

function LogoutCtrl(authToken, $state){
  authToken.removeToken();
  $state.go('login');
};

app.component('akLogout', {
	controller: LogoutCtrl
});