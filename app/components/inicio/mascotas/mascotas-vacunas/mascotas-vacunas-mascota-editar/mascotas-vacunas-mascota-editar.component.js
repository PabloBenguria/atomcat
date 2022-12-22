'use strict';

function MascotasVacunasMascotaEditarCtrl(MascotasVacunasSrv, EspeciesSrv, $stateParams, $timeout, $state){

	let vm = this;

	vm.Especies = EspeciesSrv.get();

	vm.VProxima = MascotasVacunasSrv.get({
    id: $stateParams.id,
    petvaccine_id: $stateParams.petvaccine_id
  });
	
	vm.savePetVaccine = function(){
		vm.VProxima.id = $stateParams.id;
    MascotasVacunasSrv.update(vm.VProxima);
    Materialize.toast('Vacuna actualizada', 5000, 'green accent-4');
    $timeout(function(){
      $state.go('mascota.vacunas');
    }, 10);
  };

};

app.component('akMascotasVacunasMascotaEditar', {
	templateUrl: 'components/inicio/mascotas/mascotas-vacunas/mascotas-vacunas-mascota-editar/mascotas-vacunas-mascota-editar.html',
	controller: MascotasVacunasMascotaEditarCtrl
});