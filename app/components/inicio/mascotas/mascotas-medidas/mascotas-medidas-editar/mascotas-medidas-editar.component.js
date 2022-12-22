'use strict';

function MascotasMedidasEditarCtrl(MedidasSrv, $timeout, $stateParams, $state){

 	let vm = this;
  vm.Medidas = MedidasSrv.get({
    id: $stateParams.id,
    size_id: $stateParams.size_id
  });

  vm.saveSize = function(){
    vm.Medidas.id = $stateParams.id;
    MedidasSrv.update(vm.Medidas);
    Materialize.toast('Medidas actualizadas', 5000, 'green accent-4');
    $timeout(function(){
      $state.go('mascota.medidas');
    }, 10);
  }
  
};

app.component('akMascotasMedidasEditar', {
	templateUrl: 'components/inicio/mascotas/mascotas-medidas/mascotas-medidas-editar/mascotas-medidas-editar.html',
	controller: MascotasMedidasEditarCtrl
});