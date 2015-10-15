(function() {
    'use strict';

    angular
    .module('houseDash')
    .service('twitterFeed',twitterFeed);


function twitterFeed($log, $http) {
    var URL = 'https://api.twitter.com/1.1/search/tweets.json';
    var params = 'q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4';
    var apiHost = URL + '?' + params;

    var service = {
      apiHost: apiHost,
      getTweets: getTweets
    };

    return service;

    function getTweets() {
      return $http.get(apiHost)
        .then(getTweetsComplete)
        .catch(getTweetsFailed);

      function getTweetsComplete(response) {
        return response.data;
      }

      function getTweetsFailed(error) {
        $log.error('XHR Failed for getWeather.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();

