'use strict';

function ClientesCrearCtrl(AvatarSrv, FileUploader, ClienteSrv, ProvinciasSrv, $timeout, $state, $document){

	let vm = this;
  let loading = $document.find('.loading');
  vm.Clientes = {};
  vm.Provincias = ProvinciasSrv;
  vm.uploader = new FileUploader();

  vm.imageUpload = {
    isImage: function(item) {
      let type = item.type.slice(item.type.lastIndexOf('/') + 1);
      if((type === 'jpg') || (type === 'jpeg') || (type === 'png')){
        return true;
      }
      Materialize.toast('Formato incorrecto.', 5000, 'red lighten-1');
      return false;
    }
  };
           
  vm.uploadImage = function(file) {
    loading.css('display', 'block');

    let avatar = AvatarSrv.setAvatarUrl(vm.Clientes.nombre);
    
    let storageRef = firebase.storage().ref('atomcat-avatares').child(avatar);
    let task = storageRef.put(file);
    task.on('state_changed', function progress(snapshot){
      let percentage = ( snapshot.bytesTransferred / snapshot.totalBytes )*100;
      $document.find('#progress-bar').css('width', percentage + '%');
      if (percentage == 100){
        storageRef.getDownloadURL()
        .then(function(url) {
          vm.Clientes.avatar = url;
          loading.css('display', 'none');
          $document.find('.prev-img canvas').css('border', '2px solid #46BE8A');
          $document.find('.icon-done').css('display', 'inline');
          Materialize.toast('Imagen subida!', 5000, 'green accent-4');
        })
        .catch(function(error) {
          Materialize.toast('Ha ocurrido un error.', 5000, 'red lighten-1');
        });
      }
    });
  };
      
  vm.saveCustomer = function(){
    ClienteSrv.save(vm.Clientes);
    Materialize.toast('Cliente creado', 5000, 'green accent-4');
    $timeout(function(){
      $state.go('inicio.clientes');
    }, 1000);
  };
 
  vm.initMaterialize = function(){
    $(function(){
      vm.$datePicker = $('.datepicker').pickadate({
        format: 'yyyy-mm-dd'
      });
    });
  };
  vm.initMaterialize();

};

app.component('akClientesCrear', {
	templateUrl: 'components/inicio/clientes/clientes-crear/clientes-crear.html',
	controller: ClientesCrearCtrl
});