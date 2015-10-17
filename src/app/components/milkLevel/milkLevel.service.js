(function() {
  'use strict';

  angular
  .module('houseDash')
  .service('milkLevel', milkLevel);

  /** @ngInject */
  function milkLevel($http, $log) {

    var service = {
      getMilkLevel: getMilkLevel,
      postMilkLevel: postMilkLevel
    };

    return service;
    
    function postMilkLevel(newLevel) {
      $http.post('http://192.168.0.1:8080/api/1/milk', newLevel).then(
        function(){
          //success!
        },
        function(error){
          $log.error(error);
        });
    }

    function getMilkLevel() {
      return $http.get('http://192.168.0.1:8080/api/1/milk');
    }
  }

})();