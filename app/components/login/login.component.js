'use strict';

function LoginCtrl(auth, ProfileSrv, $state){
  let vm = this;
  vm.submit = function(){
    auth.login(vm.email, vm.password)
    .success(function (res) {
      ProfileSrv.setProfile(res.profile);
      let nameCap = res.profile.nombre.charAt(0).toUpperCase() + res.profile.nombre.slice(1);
      Materialize.toast('Bienvenido ' + nameCap + '!', 5000, 'green accent-4');
      $state.go('inicio.clientes');
    })
    .error(function (err) {
      Materialize.toast('Email / contraseña incorrectos.', 5000, 'red lighten-1');
    });
  };
};

app.component('akLogin', {
  templateUrl: 'components/login/login.html',
  controller: LoginCtrl
});