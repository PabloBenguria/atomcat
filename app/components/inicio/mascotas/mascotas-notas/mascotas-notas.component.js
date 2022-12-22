'use strict';

function MascotasNotasCtrl(NotasSrv, $stateParams){

	let vm = this;
  vm.Notas = NotasSrv.get({
  	id: $stateParams.id
  });

  vm.getSmallNote = function(element){
  	let arr = element.split(' ');
  	let result = arr.slice(0, 3);
  	return result.join(' ') + ' ...';
  };
  
};

app.component('akMascotasNotas', {
	templateUrl: 'components/inicio/mascotas/mascotas-notas/mascotas-notas.html',
	controller: MascotasNotasCtrl
});