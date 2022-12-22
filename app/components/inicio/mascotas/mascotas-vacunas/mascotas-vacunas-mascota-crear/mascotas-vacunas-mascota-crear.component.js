'use strict';

function MascotasVacunasMascotasCrearCtrl(VacunasSrv, MascotasVacunasSrv, EspeciesSrv, $timeout, $stateParams, $state){

 	let vm = this;
  vm.MascotasVacunas = {};
  vm.Especies = EspeciesSrv.get();
  vm.Vacunas = VacunasSrv.get();
  
  vm.savePetVaccine = function(){
    vm.MascotasVacunas.pet_id = $stateParams.id;
    MascotasVacunasSrv.save(vm.MascotasVacunas);
    Materialize.toast('Vacuna creada', 5000, 'green accent-4');
    $timeout(function(){
      $state.go('mascota.vacunas');
    }, 10);
  };

  vm.initMaterialize = function(){
    $(function(){
      vm.$datePicker = $('.datepicker').pickadate({
        format: 'yyyy-mm-dd'
      });
    });
  };
  vm.initMaterialize();

};

app.component('akMascotasVacunasMascotaCrear', {
	templateUrl: 'components/inicio/mascotas/mascotas-vacunas/mascotas-vacunas-mascota-crear/mascotas-vacunas-mascota-crear.html',
	controller: MascotasVacunasMascotasCrearCtrl
});