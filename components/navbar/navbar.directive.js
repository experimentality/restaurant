(function() {
  'use strict';

  angular.module('restaurantApp')
    .directive('navbar', () => ({
      templateUrl: 'components/navbar/navbar.html',
      restrict: 'E',
      controller: 'NavbarController',
      controllerAs: 'nav'
    }));

})();
