'use strict';

function MascotasMedidasCrearCtrl(MedidasSrv, MascotaSrv, $stateParams, $timeout, $state){

 	let vm = this;
  vm.Medidas = {};
  vm.Mascota = MascotaSrv.get({
    id: $stateParams.id
  });
  vm.saveSize = function(){
    vm.Medidas.pet_id = vm.Mascota.id;
    MedidasSrv.save(vm.Medidas);
    Materialize.toast('Medidas creadas', 5000, 'green accent-4');
    $timeout(function(){
      $state.go('mascota.medidas');
    }, 10);
  };

};

app.component('akMascotasMedidasCrear', {
	templateUrl: 'components/inicio/mascotas/mascotas-medidas/mascotas-medidas-crear/mascotas-medidas-crear.html',
	controller: MascotasMedidasCrearCtrl
});