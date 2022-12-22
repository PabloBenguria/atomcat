'use strict';

function MascotasAgendaCtrl(MascotaSrv, $stateParams, $document, $http, API_URL){
	let vm = this;
 
 	$document.find('#calendar').fullCalendar({
 		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,basicWeek,basicDay'
		},
		locale: 'es',
		navLinks: true, 
		//editable: true,
		eventLimit: true, 
		events: function(start, end, timezone, callback){
			$http.get(API_URL + 'pets/' + $stateParams.id)
		    .then(function(response){
		      let events = [];
		      angular.forEach(response.data.petVaccines, function(value, key) {
					  events.push({
			      	title: value.proxima_vacuna,
			      	start: value.proxima_fecha,
			      	backgroundColor: '#FF681C',
			      	borderColor: '#FF681C'
			      });
					}, events);
					angular.forEach(response.data.visits, function(value, key) {
					  events.push({
			      	title: value.anamnesis,
			      	start: value.updated_at,
			      	backgroundColor: '#673AB7',
			      	borderColor: '#673AB7'
			      });
					}, events);
		      callback(events);
		    });
		},
		eventClick: function(event) {
			return false;
		}
 	});
};

app.component('akMascotasAgenda', {
	template: '<div id="calendar" class="hoverable"></div>',
	controller: MascotasAgendaCtrl
});