(function() {

  var app = angular.module('L7LandingPage', []);

  app.controller('L7Controller', function() {
    this.subtag = 'Studios';
  });

  app.directive('l7Logo', function() {
    return {
      restrict: 'E',
      templateUrl: '../templates/l7logo/l7logo.html'
    };
  });

})();
