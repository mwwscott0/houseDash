(function() {
  'use strict';

  angular
    .module('houseDash')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
