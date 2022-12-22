'use strict';

function HeaderCtrl(authToken, MascotaSrv, ProfileSrv, $stateParams, $location){
  let vm = this;
  vm.$onInit = activate;

  function activate(){
    vm.isAuthenticated = authToken.isAuthenticated;
    vm.isAdmin = ProfileSrv.isAdmin();
    vm.profile = ProfileSrv.getProfile();
    vm.Mascota = MascotaSrv.get({
      id: $stateParams.id
    });
  };
    
  vm.itemActive = function(){
    let path = $location.path();
    let current = path.split('/');
    let result = current[2].split('');
    for(let i = 0; i < result.length; i++){
      if(result[i] == '_'){
        result[i] = result[i].replace('_', ' ');
      }
    }
    if(result.length > 10){
      return vm.Mascota.nombre;
    }
    return result.join('');
  };

  vm.initMaterialize = function(){
    $(function(){
      vm.$sideNav = $('.button-collapse').sideNav({
        closeOnClick: true,
      });
      vm.$collapsible = $('.collapsible').collapsible();
      vm.$activeTab = $('ul.tabs').tabs();
      vm.$select = $('select').material_select();
      vm.$tooltip = $('.tooltipped').tooltip({delay: 50});
      vm.$datePicker = $('.datepicker').pickadate({
        format: 'yyyy-mm-dd'
      });
      vm.$dropdownButton = $('.dropdown-button').dropdown({
        belowOrigin: true,
        constrainWidth: false
      });
    });
  };
  vm.initMaterialize();

};

app.component('akHeader', {
	templateUrl: 'components/header/header.html',
	controller: HeaderCtrl
});