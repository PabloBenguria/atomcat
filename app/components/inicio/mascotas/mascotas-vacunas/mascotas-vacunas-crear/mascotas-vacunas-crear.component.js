'use strict';

function MascotasVacunasCrearCtrl(VacunasSrv, EspeciesSrv, $state, $stateParams, $timeout){
	let vm = this;
	vm.Vacunas = {};
	vm.Especies = EspeciesSrv.get();

	vm.saveVaccine = function(){
    VacunasSrv.save(vm.Vacunas);
    Materialize.toast('Vacuna creada', 5000, 'green accent-4');
    $timeout(function(){
      $state.go('mascota.vacunas');
    }, 10);
	};
};

app.component('akMascotasVacunasCrear', {
	templateUrl: 'components/inicio/mascotas/mascotas-vacunas/mascotas-vacunas-crear/mascotas-vacunas-crear.html',
	controller: MascotasVacunasCrearCtrl
});