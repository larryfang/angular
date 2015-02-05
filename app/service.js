angular.module('myapp').factory('eqService', ['$http', function($http) {
  return {
    eq: function() {

      var httpConfig = {
        headers: {}
      };
      httpConfig.headers['Content-Type'] = 'application/json';
      return $http.get('http://localhost:5000/', httpConfig).then(function(result) {

        return result.data;
      });
    }

  }
}]);