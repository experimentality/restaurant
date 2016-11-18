(function() {
  'use strict';

  angular
  .module('restaurantApp')
  .factory('Restaurant', restaurantService);
  restaurantService.$inject = ['$window','$http'];

  function restaurantService($window, $http) {
    return {
      list:  list
      // create: create
    };

    function list() {
      return $http.get('https://ym4idlez8h.execute-api.us-west-2.amazonaws.com/prod/locals')
      .then(response=>{
        return response.data;
      })
      .catch((err) => {
        return err;
      });
    }

    // function create(newComic) {
    //   return $http.post('http://jsonplaceholder.typicode.com/posts', newComic)
    //   .then(response=>{
    //     return response.data;
    //   })
    //   .catch((err) => {
    //     return err;
    //   });
    // }

  }
})();
