'use strict';

function RegisterCtrl(auth, ProfileSrv){
	let vm = this;
  vm.submit = function(){
    auth.register(vm.nombre, vm.email, vm.password)
      .success(function (res) {
        Materialize.toast('Usuario creado', 5000, 'green accent-4');
      })
      .error(function (err) {
        Materialize.toast(err.error, 5000, 'red lighten-1');
      }); 
  }
};

app.component('akRegister', {
	templateUrl: 'components/register/register.html',
	controller: RegisterCtrl
});