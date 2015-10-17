(function() {
  'use strict';

  angular
  .module('houseDash')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $log, $timeout, webDevTec, toastr, weather, milkLevel) {
    var vm = this;

    vm.awesomeThings = [];
    vm.weather = [];
    vm.classAnimation = '';
    vm.creationDate = 1441739700584;
    vm.showToastr = showToastr;
    vm.test = 'test';
    vm.milkLevel = 9999999;

    activate();
    function activate() {
      getWebDevTec();
      getWeather();
      getMilkLevel();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function getMilkLevel(){
      milkLevel.getMilkLevel().then(function(response){
        if (response !== 'NaN' && vm.milkLevel !== response.data){
          vm.milkLevel =  parseInt(response.data);
        }
      },
      function(error){
        $log.error(error);
      });
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    function getWeather() {
      weather.getWeather().then(function(response) {
        vm.weather = response;
      }
      );
    }

    $scope.increaseMilkLevel = function(){
      vm.milkLevel = vm.milkLevel + 10;
      $log.debug('VM MILKLEVEL: ' + vm.milkLevel);
      milkLevel.postMilkLevel(vm.milkLevel);
    };

    $scope.decreaseMilkLevel = function(){
      vm.milkLevel = vm.milkLevel - 10;
      milkLevel.postMilkLevel(vm.milkLevel);
    };
    $scope.$watch(milkLevel.currentMilkLevel, function(){
      $log.warn('updated milkLevel to ' + milkLevel.currentMilkLevel);
    });

}})();
