'use strict';

function MascotasNotasCrearCtrl(NotasSrv, MascotaSrv, $timeout, $stateParams, $state){

	let vm = this;
  vm.Notas = {};
  vm.Mascota = MascotaSrv.get({
    id: $stateParams.id
  });
    
  vm.saveNote = function(){
    vm.Notas.pet_id = vm.Mascota.id;
    NotasSrv.save(vm.Notas);
    Materialize.toast('Nota creada', 5000, 'green accent-4');
    $timeout(function(){
      $state.go('mascota.notas');
    }, 1000);
  };

};

app.component('akMascotasNotasCrear', {
	templateUrl: 'components/inicio/mascotas/mascotas-notas/mascotas-notas-crear/mascotas-notas-crear.html',
	controller: MascotasNotasCrearCtrl
})