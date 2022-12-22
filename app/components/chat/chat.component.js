'use strict';

function ChatCtrl(ChatSrv, ProfileSrv, $timeout, $document){
	
	let vm = this;
	let profile = ProfileSrv.getProfile();
	let outputChat = document.getElementById('output-chat');
	let chat = $document.find('.chat');
	
	vm.Chat = {};
	vm.Messages = [];
	
	function Output(avatar, msg){
		this.avatar = avatar;
		this.msg = msg;
	};

	vm.sendChat = function(){
		vm.Messages.push(new Output(profile.avatar, vm.Chat.pregunta));
		vm.Messages.push(new Output('img/chatbot.png', getResponse(vm.Chat.pregunta)));
		vm.Chat.pregunta = ' ';
		$timeout(function(){
			outputChat.scrollTop = outputChat.scrollHeight;
		}, 0, false);
	};

	function getResponse(ask){
		let chats = ChatSrv;
		for(let i = 0; i < chats.length; i++){
			for(let j = 0; j < chats[i].pregunta.length; j++){
				if(ask.includes(chats[i].pregunta[j])){
					return chats[i].respuesta;
				}
			}
		}
		return '¿Puedes darme más información?';
	};
	
	vm.toggleChat = function(){
		if(chat.css('display') == 'none'){
			chat.css('display', 'inline-block');
		}else{
			chat.css('display', 'none');
		}
	};

};

app.component('akChat', {
	templateUrl: 'components/chat/chat.html',
	controller: ChatCtrl
});