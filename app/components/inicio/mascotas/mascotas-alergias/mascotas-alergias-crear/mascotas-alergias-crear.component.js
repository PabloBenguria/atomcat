'use strict';

function MascotasAlergiasCrearCtrl(AlergiasSrv, MascotaSrv, $timeout, $stateParams, $state){

 	let vm = this;
  vm.Alergias = {};
  vm.Mascota = MascotaSrv.get({
    id: $stateParams.id
  });
  vm.saveAllergie = function(){
    vm.Alergias.pet_id = vm.Mascota.id;
    AlergiasSrv.save(vm.Alergias);
    Materialize.toast('Alergia creada', 5000, 'green accent-4');
    $timeout(function(){
      $state.go('mascota.alergias');
    }, 1000);
  };

};

app.component('akMascotasAlergiasCrear', {
	templateUrl: 'components/inicio/mascotas/mascotas-alergias/mascotas-alergias-crear/mascotas-alergias-crear.html',
	controller: MascotasAlergiasCrearCtrl
});