'use strict';

function MascotasAlergiasEditarCtrl(AlergiasSrv, $timeout, $stateParams, $state){

 	let vm = this;
  vm.Alergias = AlergiasSrv.get({
    id: $stateParams.id,
    allergie_id: $stateParams.allergie_id
  });

  vm.saveAllergie = function(){
    vm.Alergias.id = $stateParams.id;
    AlergiasSrv.update(vm.Alergias);
    Materialize.toast('Alergia actualizada', 5000, 'green accent-4');
    $timeout(function(){
      $state.go('mascota.alergias');
    }, 1000);
  }
  
};

app.component('akMascotasAlergiasEditar', {
	templateUrl: 'components/inicio/mascotas/mascotas-alergias/mascotas-alergias-editar/mascotas-alergias-editar.html',
	controller: MascotasAlergiasEditarCtrl
});