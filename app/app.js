'use strict';

var app = angular.module('frontApp', [
  'angular.filter', 
  'ngResource', 
  'ui.router', 
  'ui.materialize', 
  'toastr', 
  'angularUtils.directives.dirPagination', 
  'angularFileUpload',
  'htmlToPdfSave',
  'angular-loading-bar'
]);

//Local
app.constant('API_URL', 'http://localhost:8089/');

//Heroku
//app.constant('API_URL', 'https://atomcat.herokuapp.com/');

app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider){
  cfpLoadingBarProvider.includeSpinner = false;
}]);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider){

  $urlRouterProvider.otherwise('/login');

  $stateProvider
    .state('/', {
      url: '/',
      template: '<ak-clientes></ak-clientes>'
    })
    .state('register', {
      url: '/register',
      template: '<ak-register></ak-register>'
    })
    .state('login', {
      url: '/login',
      template: '<ak-login></ak-login>'
    })
    .state('logout', {
      url: '/logout',
      template: '<ak-logout></ak-logout>'
    })
    .state('inicio', {
      url: '/inicio',
      template: '<ak-inicio></ak-inicio>'
    })
    .state('inicio.informes', {
      url: '/informes',
      template: '<ak-informes></ak-informes>'
    })
    .state('inicio.config', {
      url: '/configuracion',
      template: '<ak-config></ak-config>'
    })
    .state('inicio.clientes', {
      url: '/clientes',
      template: '<ak-clientes></ak-clientes>'
    })
    .state('inicio.cliente-crear', {
      url: '/crear_cliente',
      template: '<ak-clientes-crear></ak-clientes-crear>'
    })
    .state('inicio.cliente-editar', {
      url: '/crear_cliente/{id}',
      template: '<ak-clientes-editar></ak-clientes-editar>'
    })
    .state('inicio.cliente', {
      url: '/clientes/{id}',
      template: '<ak-clientes-ver></ak-clientes-ver>'
    })
    .state('inicio.mascotas', {
      url: '/mascotas',
      template: '<ak-mascotas></ak-mascotas>'
    })
    .state('inicio.mascota-crear', {
      url: '/crear_mascota',
      template: '<ak-mascotas-crear></ak-mascotas-crear>'
    })
    .state('inicio.mascota-editar', {
      url: '/crear_mascota/{id}',
      template: '<ak-mascotas-editar></ak-mascotas-editar>'
    })
    .state('mascota', {
      url: '/mascota/{id}',
      template: '<ak-mascotas-ver></ak-mascotas-ver>'
    })
    .state('mascota.perfil', {
      url:'/',
      template: '<ak-mascotas-perfil></ak-mascotas-perfil>'
    })
    .state('mascota.visitas', {
      url: '/visitas',
      template: '<ak-mascotas-visitas></ak-mascotas-visitas>'
    })
    .state('mascota.visitas-crear', {
      url: '/visitas',
      template: '<ak-mascotas-visitas-crear></ak-mascotas-visitas-crear>'
    })
    .state('mascota.visitas-editar', {
      url: '/visitas/{visit_id}',
      template: '<ak-mascotas-visitas-editar></ak-mascotas-visitas-editar>'
    })
    .state('mascota.notas', {
      url: '/notas',
      template: '<ak-mascotas-notas></ak-mascotas-notas>'
    })
    .state('mascota.notas-crear', {
      url: '/notas',
      template: '<ak-mascotas-notas-crear></ak-mascotas-notas-crear>'
    })
    .state('mascota.notas-editar', {
      url: '/notas/{note_id}',
      template: '<ak-mascotas-notas-editar></ak-mascotas-notas-editar>'
    })
    .state('mascota.alergias', {
      url: '/alergias',
      template: '<ak-mascotas-alergias></ak-mascotas-alergias>'
    })
    .state('mascota.alergias-crear', {
      url: '/alergias',
      template: '<ak-mascotas-alergias-crear></ak-mascotas-alergias-crear>'
    })
    .state('mascota.alergias-editar', {
      url: '/alergias/{allergie_id}',
      template: '<ak-mascotas-alergias-editar></ak-mascotas-alergias-editar>',
    })
    .state('mascota.vacunas', {
      url: '/vacunas',
      template: '<ak-mascotas-vacunas></ak-mascotas-vacunas>'
    })
    .state('mascota.vacunas-crear', {
      url: '/crear_vacuna',
      template: '<ak-mascotas-vacunas-crear></ak-mascotas-vacunas-crear>'
    })
    .state('mascota.vacunas-editar', {
      url: '/vacunas/{vaccine_id}',
      template: '<ak-mascotas-vacunas-editar></ak-mascotas-vacunas-editar>'
    })
    .state('mascota.vacunas-mascota-crear', {
      url: '/crear_vacuna_mascota',
      template: '<ak-mascotas-vacunas-mascota-crear></ak-mascotas-vacunas-mascota-crear>'
    })
    .state('mascota.vacunas-mascota-editar', {
      url: '/vacunas_mascota/{petvaccine_id}',
      template: '<ak-mascotas-vacunas-mascota-editar></ak-mascotas-vacunas-mascota-editar>'
    })
    .state('mascota.medidas', {
      url: '/medidas',
      template: '<ak-mascotas-medidas></ak-mascotas-medidas>'
    })
    .state('mascota.medidas-crear', {
      url: '/medidas',
      template: '<ak-mascotas-medidas-crear></ak-mascotas-medidas-crear>'
    })
    .state('mascota.medidas-editar', {
      url: '/medidas/{size_id}',
      template: '<ak-mascotas-medidas-editar></ak-mascotas-medidas-editar>'
    })
    .state('mascota.agenda', {
      url: '/agenda',
      template: '<ak-mascotas-agenda></ak-mascotas-agenda>'
    });

    $httpProvider.interceptors.push('authInterceptor');
});


