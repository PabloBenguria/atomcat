'use strict';

function MascotasCtrl(MascotaSrv, $document){
	let vm = this;
  vm.Mascotas = MascotaSrv.get();
  let inputSearch = $document.find('.content-search input');
	vm.toggleSearch = function(){
		if(inputSearch.css('display') == 'none'){
			inputSearch.css('display', 'inline-block');
			inputSearch.addClass('activate');
		}else{
			inputSearch.css('display', 'none');
			inputSearch.removeClass('activate');
		}
	};
};

app.component('akMascotas', {
	templateUrl: 'components/inicio/mascotas/mascotas.html',
	controller: MascotasCtrl
});