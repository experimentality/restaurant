(function(){
  'use strict';

  class LoginComponent {
    constructor(Restaurant) {
      this.Restaurant = Restaurant;
    }

    $onInit(){
      this.list();
    }

    list(){
      this.Restaurant.list()
      .then((restaurants) => {
        this.restaurants = restaurants.body;
      });
    }
  }

  angular.module('restaurantApp')
  .component('home', {
    templateUrl: 'app/home/home.html',
    controller: LoginComponent,
    controllerAs: 'vm'
  });

})();
