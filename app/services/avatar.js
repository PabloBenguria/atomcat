'use strict';

app.service('AvatarSrv', function(){
	this.setAvatarUrl = function(text){
	  let avatarName = text.toLowerCase().split(' ').join('');
	  for(let i = 0; i < avatarName.length; i++){
	    if(avatarName.charAt(i) == 'á'){avatarName = avatarName.replace(/á/, 'a');}
	    if(avatarName.charAt(i) == 'é'){avatarName = avatarName.replace(/é/, 'e');}
	    if(avatarName.charAt(i) == 'í'){avatarName = avatarName.replace(/í/, 'i');}
	    if(avatarName.charAt(i) == 'ó'){avatarName = avatarName.replace(/ó/, 'o');}
	    if(avatarName.charAt(i) == 'ú'){avatarName = avatarName.replace(/ú/, 'u');}
	    if(avatarName.charAt(i) == 'ñ'){avatarName = avatarName.replace(/ñ/, 'n');}
	  }
	  let d = new Date();
	  let avatarDate = d.getTime();
	  return avatarName + avatarDate;
	};
});
