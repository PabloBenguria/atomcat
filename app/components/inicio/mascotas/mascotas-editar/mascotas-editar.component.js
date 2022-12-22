'use strict';

function MascotasEditarCtrl(AvatarSrv, ClienteSrv, MascotaSrv, FileUploader, EspeciesSrv, RazasSrv, EstadosSrv, $timeout, $stateParams, $state, $document){

	let vm = this;
  let loading = $document.find('.loading');
  vm.Raza = {};
  vm.Propietario = ClienteSrv.get();
  vm.Especies = EspeciesSrv.get();
  vm.Razas = RazasSrv.get();
  vm.Estados = EstadosSrv;

  vm.Mascotas = MascotaSrv.get({
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

    let avatar = AvatarSrv.setAvatarUrl(vm.Mascotas.nombre);
    
    let storageRef = firebase.storage().ref('atomcat-avatares').child(avatar);
    let task = storageRef.put(file);
    task.on('state_changed', function progress(snapshot){
      let percentage = ( snapshot.bytesTransferred / snapshot.totalBytes )*100;
      if (percentage == 100){
        storageRef.getDownloadURL()
        .then(function(url) {
          vm.Mascotas.avatar = url;
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
 
  vm.savePet = function(){
    MascotaSrv.update(vm.Mascotas);
    Materialize.toast('Mascota actualizada', 5000, 'green accent-4');
    $timeout(function(){
      $state.go('inicio.mascotas');
    }, 1000);
  };

  vm.saveRace = function(){
    vm.Raza.specie_id = vm.Mascotas.specie_id;
    RazasSrv.save(vm.Raza);
    vm.Especies = EspeciesSrv.get();
    Materialize.toast('Raza creada', 5000, 'green accent-4');
  };

  vm.initMaterialize = function(){
    $(function(){
      vm.$select = $('select').material_select();
      vm.$datePicker = $('.datepicker').pickadate({
        format: 'yyyy-mm-dd'
      });
    });
  };
  vm.initMaterialize();
  
};

app.component('akMascotasEditar', {
	templateUrl: 'components/inicio/mascotas/mascotas-editar/mascotas-editar.html',
	controller: MascotasEditarCtrl
});