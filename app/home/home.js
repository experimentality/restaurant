(function(){
  'use strict';

  angular
  .module('restaurantApp')
  .config(function ($stateProvider){
    $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>',
      authenticate: true
    });
  });

})();
