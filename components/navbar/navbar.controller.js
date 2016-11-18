(function() {
  'use strict';

  class NavbarController {
    constructor( $window) {
    // constructor(Auth, $window) {
      // this.Auth = Auth;
      // this.isLoggedIn = this.Auth.isLoggedIn;
      // this.getUsername = this.Auth.getUsername;
    }

    logout(){
      this.Auth.logout();
    }

  }

  angular.module('restaurantApp')
  .controller('NavbarController', NavbarController);

})();
