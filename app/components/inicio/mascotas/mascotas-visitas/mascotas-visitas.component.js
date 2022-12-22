'use strict';

function MascotasVisitasCtrl(VisitasSrv, $stateParams){

	let vm = this;
  vm.Visitas = VisitasSrv.get({
  	id: $stateParams.id
  });
  
};

app.component('akMascotasVisitas', {
	templateUrl: 'components/inicio/mascotas/mascotas-visitas/mascotas-visitas.html',
	controller: MascotasVisitasCtrl
});