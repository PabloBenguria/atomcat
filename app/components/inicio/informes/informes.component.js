'use strict';

function InformesCtrl(InformesSrv, $document){
	
	let vm = this;
	
	vm.Busqueda = {};
	vm.getInformes = function(){
		vm.Informes = InformesSrv.save(vm.Busqueda);
	};
	
	vm.initMaterialize = function(){
    $(function(){
      vm.$datePicker = $('.datepicker').pickadate({
        format: 'yyyy-mm-dd'
      });
    });
  };
  vm.initMaterialize();

  vm.getLetters = function(){
  	let html = document.getElementById('letters').innerHTML;
  	let style = 'h4, h5{margin-left: 40%;} p{margin: 100px 0 300px;} span{font-weight: bold;}';
  	let mime = {
      mhtml: {
        top: "Mime-Version: 1.0\nContent-Type: Multipart/related; boundary=\"NEXT.ITEM-BOUNDARY\";type=\"text/html\"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset=\"utf-8\"\n<!DOCTYPE html>\n<html>\n_html_</html>",
        head: "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n<style>\n_styles_\n</style>\n</head>\n",
        body: "<body>_body_</body>"
      }
    };
    let fileContent = mime.mhtml.head.replace("_styles_", style) + mime.mhtml.body.replace("_body_", html);
		let blob = new Blob(['\ufeff', fileContent], {
			type: 'application/msword;charset=utf-8'
		});
		let url = URL.createObjectURL(blob);
		let link = document.createElement('a');
		link.href = url;
		// Set default file name. 
		// Word will append file extension - do not add an extension here.
		link.download = 'Cartas';   
		document.body.appendChild(link);
		if(navigator.msSaveOrOpenBlob){
			navigator.msSaveOrOpenBlob( blob, 'Cartas.doc'); // IE10-11
		}else{
			link.click();  // other browsers
		}
		document.body.removeChild(link);
  };

  vm.getCurrentDate = function(){
  	let f = new Date();
  	let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  	return f.getDate() + " de " + meses[f.getMonth()] + " del " + f.getFullYear();
  };

};

app.component('akInformes', {
	templateUrl: 'components/inicio/informes/informes.html',
	controller: InformesCtrl
});