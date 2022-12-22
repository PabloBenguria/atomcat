'use strict';

function MascotasVisitasCrearCtrl(VisitasSrv, MascotaSrv, $timeout, $stateParams, $state){

	let vm = this;
  vm.Visitas = {};
  vm.Mascota = MascotaSrv.get({
    id: $stateParams.id
  });
    
  vm.saveVisit = function(){
    vm.Visitas.pet_id = vm.Mascota.id;
    VisitasSrv.save(vm.Visitas);
    Materialize.toast('Visita creada', 5000, 'green accent-4');
    $timeout(function(){
      $state.go('mascota.visitas');
    }, 1000);
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

app.component('akMascotasVisitasCrear', {
	templateUrl: 'components/inicio/mascotas/mascotas-visitas/mascotas-visitas-crear/mascotas-visitas-crear.html',
	controller: MascotasVisitasCrearCtrl
})