'use strict';

function ClientesEditarCtrl(AvatarSrv, ClienteSrv, FileUploader, ProvinciasSrv, $timeout, $stateParams, $state, $document){
 
 	let vm = this;
  let loading = $document.find('.loading');
  vm.Provincias = ProvinciasSrv;
  vm.Clientes = ClienteSrv.get({
    id: $stateParams.id
  });
  vm.uploader = new FileUploader();

  vm.imageUpload = {
    isImage: function(item) {
      var type = item.type.slice(item.type.lastIndexOf('/') + 1);
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
    ClienteSrv.update(vm.Clientes);
    Materialize.toast('Cliente actualizado', 5000, 'green accent-4');
    $timeout(function(){
      $state.go('inicio.clientes');
    }, 1000);
  }

};

app.component('akClientesEditar', {
	templateUrl: 'components/inicio/clientes/clientes-editar/clientes-editar.html',
	controller: ClientesEditarCtrl
});