(function() {
    'use strict';
    angular
    .module('houseDash')
    .config(function($httpProvider){
      $httpProvider.defaults.useXDomain = true;

    //Remove the header containing XMLHttpRequest used to identify ajax call 
    //that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
})
    .service('twitterFeed',twitterFeed);



    function twitterFeed($log, $http) {
        var URL = 'https://api.twitter.com/1.1/search/tweets.json';
        var params = 'q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4';
        var apiHost = URL + '?' + params;
        var apiKey = 'dGM2WmdvN2ZVWlk0WHMzTWswUXR1a24xUzpDeWx3SEdoMFhtU09Ha1VYSUtBeEZDb2t4REE4MU1QakQ0UnNNTmFmRmhYSklFWTI4WQ==';
        var bearerToken = authenticate();
        var service = {
          apiHost: apiHost,
          getTweets: getTweets
      };

      return service;

      function authenticate() {

        $http.post('http://requestb.in/1mg8ydd1?inspect','grant_type=client_credentials', {
            headers: {'Content-Type': 'application/x-www-form-urlencoded','Authorization': 'Basic ' + apiKey}
        }).then(function(response) {
            return response['access.token'];
        } , function(error) {
            $log.error('Authorization Failed for twitterFeed.\n' + angular.toJson(error.data, true));
            $log.error(error);
        });
        
    }

    function getTweets() {
        $http.get(apiHost, {'Authorization': 'Bearer ' + bearerToken})
        .then(function(response) {
            return response;
        }, function(error) {
            $log.error('Tweeting Failed for twitterFeed.\n' + angular.toJson(error.data, true));
        });
    }

    function getTweetsComplete(response) {
        return response.data;
    }

}
})();

