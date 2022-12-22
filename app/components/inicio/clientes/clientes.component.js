'use strict';

function ClientesCtrl(ClienteSrv, $document, $scope){
	let vm = this;
	vm.Clientes = ClienteSrv.get();
	let inputSearch = $document.find('.content-search input');
	let iconSearch = $document.find('.content-search .material-icons');

	vm.toggleSearch = function(){
		if(inputSearch.css('display') == 'none'){
			inputSearch.css('display', 'inline-block');
			iconSearch.css('color', '#FF681C');
		}else{
			inputSearch.css('display', 'none');
			iconSearch.css('color', '#727272');
		}
	};
	/*
	function removeAccents(value) {
        return value
            .replace(/á/g, 'a')            
            .replace(/é/g, 'e')
            .replace(/í/g, 'i')
            .replace(/ó/g, 'o')
            .replace(/ú/g, 'u');
    }
    
    $scope.ignoreAccents = function(item) {               
        if (!$scope.search)
            return true;

        var text = removeAccents(item.nombre.toLowerCase());
        var search = removeAccents($scope.search.toLowerCase());
        return text.indexOf(search) > -1;
    };
    */

}; 

app.component('akClientes', {
	templateUrl: 'components/inicio/clientes/clientes.html',
	controller: ClientesCtrl
});

