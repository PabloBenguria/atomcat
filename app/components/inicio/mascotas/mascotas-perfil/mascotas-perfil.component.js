'use strict';

function MascotasPerfilCtrl(MascotaSrv, $stateParams){

  let vm = this;  
  vm.Mascotas = MascotaSrv.get({
    id: $stateParams.id
  });

};

app.component('akMascotasPerfil', {
  templateUrl: 'components/inicio/mascotas/mascotas-perfil/mascotas-perfil.html',
  controller: MascotasPerfilCtrl
});