(function() {
'use strict';

angular
  .module('houseDash')
  .service('weather', weather);

  /** @ngInject */
  function weather($log, $http) {
    var apiHost = 'http://api.openweathermap.org/data/2.5/weather?zip=93405,us&units=imperial&APPID=41fcd0cb3757de499ba9d0b1d28aa108';

    var service = {
      apiHost: apiHost,
      getWeather: getWeather
    };

    return service;

    function getWeather() {
      return $http.get(apiHost)
        .then(getWeatherComplete)
        .catch(getWeatherFailed);

      function getWeatherComplete(response) {
        return response.data;
      }

      function getWeatherFailed(error) {
        $log.error('XHR Failed for getWeather.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();