'use strict';

function MascotasMedidasCtrl(MedidasSrv, $stateParams){

	let vm = this;
  vm.Medidas = MedidasSrv.get({
  	id: $stateParams.id
  });
  
};

app.component('akMascotasMedidas', {
	templateUrl: 'components/inicio/mascotas/mascotas-medidas/mascotas-medidas.html',
	controller: MascotasMedidasCtrl
});

