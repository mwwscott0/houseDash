(function() {
'use strict';

angular
  .module('houseDash')
  .service('milkLevel', milkLevel);

  /** @ngInject */
  function milkLevel() {
    var currentMilkLevel = 100;

    var service = {
      getMilkLevel: getMilkLevel
    };

    return service;

    function getMilkLevel() {
     return currentMilkLevel;
    }
  }
})();