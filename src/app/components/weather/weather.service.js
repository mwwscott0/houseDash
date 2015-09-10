(function() {
'use strict';

angular
.module('houseDash')
.factory('weather', weather);

  /** @ngInject */
  function weather($http) {
    var apiHost = 'https://api.openweathermap.org/data/2.5/weather?zip=94040,us';

    var service = {
      apiHost: apiHost,
      getWeather: getWeather
    };

    return service;

    function getWeather {

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