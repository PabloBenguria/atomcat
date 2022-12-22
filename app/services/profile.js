'use strict';

app.service('ProfileSrv', function($window){
  var storage = $window.localStorage;
  var localName = 'user';
  var cachedUser;
 
  this.getProfile = function () {
    if(!cachedUser){
      cachedUser = storage.getItem(localName);
    }
    return JSON.parse(cachedUser);
  };

  this.setProfile = function(value) {
    cachedUser = JSON.stringify(value);
    storage.setItem(localName, cachedUser);
  };

  this.isAdmin = function(value) {
    var profile = this.getProfile();
    if(profile.role === 'admin'){
      return true;
    }
  };

});