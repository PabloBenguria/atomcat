'use strict';

function MascotasVacunasEditarCtrl(VacunasSrv, EspeciesSrv, $state, $stateParams, $timeout){
	let vm = this;
	vm.Especies = EspeciesSrv.get();
	vm.Vacunas = VacunasSrv.get({
    id: $stateParams.id,
    vaccine_id: $stateParams.vaccine_id
  });

  vm.saveVaccine = function(){
    VacunasSrv.update(vm.Vacunas);
    Materialize.toast('Vacuna actualizada', 5000, 'green accent-4');
    $timeout(function(){
      $state.go('mascota.vacunas');
    }, 10);
  };
};

app.component('akMascotasVacunasEditar', {
	templateUrl: 'components/inicio/mascotas/mascotas-vacunas/mascotas-vacunas-editar/mascotas-vacunas-editar.html',
	controller: MascotasVacunasEditarCtrl
});