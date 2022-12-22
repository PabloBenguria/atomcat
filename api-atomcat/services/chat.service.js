'use strict';

module.exports = (pregunta) => {
	
	db.chat.findAll()
		.then(chats => {
			return chats;
		});
};

function splitPregunta(pregunta, chat){
	let arr = pregunta.split(' ');
	let result = [];
	arr.map(item => {
		
	});
};

				
