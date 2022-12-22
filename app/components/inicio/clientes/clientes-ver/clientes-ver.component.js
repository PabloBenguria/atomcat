'use strict';

function ClientesVerCtrl(ClienteSrv, $stateParams, $document){

	let vm = this;
  vm.Clientes = ClienteSrv.get({
    id: $stateParams.id
  });
   
};

app.component('akClientesVer', {
	templateUrl: 'components/inicio/clientes/clientes-ver/clientes-ver.html',
	controller: ClientesVerCtrl
});