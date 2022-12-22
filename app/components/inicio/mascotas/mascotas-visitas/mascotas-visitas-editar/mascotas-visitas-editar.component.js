'use strict';

function MascotasVisitasEditarCtrl(VisitasSrv, $timeout, $stateParams, $state){

 	let vm = this;
  vm.Visitas = VisitasSrv.get({
    id: $stateParams.id,
    visit_id: $stateParams.visit_id
  });

  vm.saveVisit = function(){
    vm.Visitas.id = $stateParams.id;
    VisitasSrv.update(vm.Visitas);
    Materialize.toast('Visitas actualizadas', 5000, 'green accent-4');
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

app.component('akMascotasVisitasEditar', {
	templateUrl: 'components/inicio/mascotas/mascotas-visitas/mascotas-visitas-editar/mascotas-visitas-editar.html',
	controller: MascotasVisitasEditarCtrl
});