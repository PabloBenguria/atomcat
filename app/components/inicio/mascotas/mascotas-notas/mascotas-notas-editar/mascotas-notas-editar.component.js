'use strict';

function MascotasNotasEditarCtrl(NotasSrv, $timeout, $stateParams, $state){

 	let vm = this;
  vm.Notas = NotasSrv.get({
    id: $stateParams.id,
    note_id: $stateParams.note_id
  });

  vm.saveNote = function(){
    vm.Notas.id = $stateParams.id;
    NotasSrv.update(vm.Notas);
    Materialize.toast('Notas actualizadas', 5000, 'green accent-4');
    $timeout(function(){
      $state.go('mascota.notas');
    }, 1000);
  }
  
};

app.component('akMascotasNotasEditar', {
	templateUrl: 'components/inicio/mascotas/mascotas-notas/mascotas-notas-editar/mascotas-notas-editar.html',
	controller: MascotasNotasEditarCtrl
});