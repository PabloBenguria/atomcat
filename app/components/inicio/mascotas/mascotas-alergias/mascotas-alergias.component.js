'use strict';

function MascotasAlergiasCtrl(AlergiasSrv, $stateParams){

	let vm = this;
  vm.Alergias = AlergiasSrv.get({
  	id: $stateParams.id
  });
  
};


app.component('akMascotasAlergias', {
	templateUrl: 'components/inicio/mascotas/mascotas-alergias/mascotas-alergias.html',
	controller: MascotasAlergiasCtrl
});