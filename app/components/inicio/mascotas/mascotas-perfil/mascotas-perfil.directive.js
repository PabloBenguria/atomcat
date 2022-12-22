'use strict';

app.directive('dirToast', function(){
  return{
    restrict: 'E',
    transclude: true,
    scope: {
      alergia: '=alergia'
    },
    link: function(scope) {
      Materialize.toast(scope.alergia, 5000, 'red lighten-1');
    }
  }
});