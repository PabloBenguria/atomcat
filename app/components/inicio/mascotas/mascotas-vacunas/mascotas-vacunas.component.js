'use strict';

function MascotasVacunasCtrl(VacunasSrv, EspeciesSrv, MascotaSrv, $stateParams){

  let vm = this;

  vm.Mascotas = MascotaSrv.get({
    id: $stateParams.id
  });

  vm.Especies = EspeciesSrv.get();
  
  vm.Vacunas = VacunasSrv.get({
    id: $stateParams.id
  });
  
};

app.component('akMascotasVacunas', {
	templateUrl: 'components/inicio/mascotas/mascotas-vacunas/mascotas-vacunas.html',
	controller: MascotasVacunasCtrl
});