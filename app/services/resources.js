'use strict';

app.factory('UserSrv', function($resource, API_URL){
  var url = API_URL + 'user/:id';
  return $resource(url, {id: '@id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('ClienteSrv', function($resource, API_URL){
  var url = API_URL + 'owners/:id';
  return $resource(url, {id: '@id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('InformesSrv', function($resource, API_URL){
  var url = API_URL + 'reports/:id';
  return $resource(url, {id: '@id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('MascotaSrv', function($resource, API_URL){
  var url = API_URL + 'pets/:id';
  return $resource(url, {id: '@id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('EspeciesSrv', function($resource, API_URL){
  var url = API_URL + 'species/:id';
  return $resource(url, {id: '@id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('RazasSrv', function($resource, API_URL){
  var url = API_URL + 'races/:id';
  return $resource(url, {id: '@id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('VisitasSrv', function($resource, API_URL){
	var url = API_URL + 'pets/:id/visits/:visit_id';
	return $resource(url, {id: '@id', visit_id: '@visit_id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('NotasSrv', function($resource, API_URL){
  var url = API_URL + 'pets/:id/notes/:note_id';
  return $resource(url, {id: '@id', note_id: '@note_id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('AlergiasSrv', function($resource, API_URL){
  var url = API_URL + 'pets/:id/allergies/:allergie_id';
  return $resource(url, {id: '@id', allergie_id: '@allergie_id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('VacunasSrv', function($resource, API_URL){
  var url = API_URL + 'pets/:id/vaccines/:vaccine_id';
  return $resource(url, {id: '@id', vaccine_id: '@vaccine_id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('MascotasVacunasSrv', function($resource, API_URL){
  var url = API_URL + 'pets/:id/pets_vaccines/:petvaccine_id';
  return $resource(url, {id: '@id', petvaccine_id: '@petvaccine_id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('MedidasSrv', function($resource, API_URL){
  var url = API_URL + 'pets/:id/sizes/:size_id';
  return $resource(url, {id: '@id', size_id: '@size_id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('ChatSrv', function(){
  var chats = [
    {
      'pregunta': ['cre', 'alta', 'añad', 'agreg'],
      'respuesta': 'Para crear un cliente o una mascota pulsa en el botón situado en el menú lateral. Una vez rellenes todos los campos se activará el botón para crearlo'
    },
    {
      'pregunta': ['modific', 'cambi'],
      'respuesta': 'Para modificar un elemento basta con pulsar en el botón naranja con el icono de un lápiz.'
    },
    {
      'pregunta': ['busc', 'filtr'],
      'respuesta': 'Para buscar pulsa el botón circular blanco con el icono de la lupa y se mostrará un campo para introducir los términos de la búsqueda.'
    },
    {
      'pregunta': ['foto', 'imagen'],
      'respuesta': 'Para crear o modificar la foto de perfil, pulsa el botón de SELECCIONAR IMAGEN, selecciona la foto y pulsa en el botón con el icono de una nube.'
    },
    {
      'pregunta': ['vacuna'],
      'respuesta': 'En el apartado de Vacunas, en la parte superior se muestran todas vacunas de la especie a la que pertenece la mascota, debajo las vacunas que tiene y a la derecha las siguientes.'
    },
    {
      'pregunta': ['agenda', 'calendario'],
      'respuesta': 'En el apartado de Agenda se visualizan las vacunas y las visitas de la mascota seleccionada.'
    },
    {
      'pregunta': ['nota'],
      'respuesta': 'El apartado de Notas permite visualizar, crear y modificar notas sobre la mascota seleccionada.'
    },
    {
      'pregunta': ['alergia'],
      'respuesta': 'El apartado de Alergias permite visualizar, crear y modificar las alergias que tenga una mascota, las cuales se mostrarán con un mensaje flotante cada vez que se entre en el perfil de la misma.'
    },
    {
      'pregunta': ['visita', 'cita'],
      'respuesta': 'El apartado de Visitas permite visualizar, crear y modificar las visitas de la mascota seleccionada a la clínica.'
    },
    {
      'pregunta': ['medida', 'mide', 'pes', 'altura'],
      'respuesta': 'El apartado de Medidas permite visualizar, crear y modificar las medidas de la mascota seleccionada.'
    },
    {
      'pregunta': ['informe', 'lista', 'carta', 'avis'],
      'respuesta': 'El apartado de Informes permite generar un listado de las vacunas que las mascotas tienen pendientes, y generar las correspondientes cartas de aviso para enviar a los dueños.'
    },
    {
      'pregunta': ['agresiv', 'caracter', 'carácter'],
      'respuesta': 'El carácter de cada mascota se representa con icono de un perro ladrando, siendo uno muy manso y cinco muy agresivo.'
    }
  ];
  return chats;
});

app.factory('ProvinciasSrv', function(){
	var provincias = [
		'Álava', 'Albacete', 'Alicante', 'Almería',
    'Asturias', 'Ávila', 'Badajoz', 'Barcelona', 'Burgos',
    'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real',
    'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada',
    'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca', 'Baleares',
    'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga',
    'Murcia', 'Navarra', 'Orense', 'Palencia', 'Las Palmas',
    'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia',
    'Sevilla', 'Soria', 'Tarragona', 'Santa Cruz de Tenerife',
    'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya',
    'Zamora', 'Zaragoza', 'Ceuta', 'Melilla'
	];
	return provincias;
});

app.factory('EstadosSrv', function(){
  var estados = [
    'Vivo', 'Muerto', 'Sacrificado'
  ];
  return estados;
});

