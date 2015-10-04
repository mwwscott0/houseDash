(function() {
  'use strict';

  angular
  .module('houseDash')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, weather, milkLevel) {
    var vm = this;

    vm.awesomeThings = [];
    vm.weather = [];
    vm.classAnimation = '';
    vm.creationDate = 1441739700584;
    vm.showToastr = showToastr;
    vm.test = 'test';
    vm.milkLevel = 0;

    activate();
    function activate() {
      getWebDevTec();
      getWeather();
      getMilkLevel();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
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

    function getMilkLevel() {
      vm.milkLevel =  milkLevel.getMilkLevel();
    }

    function incrementMilkLevel() {
      vm.milkLevel = vm.milkLevel + 10;
            console.log("increment is called");

    }

  }
})();
