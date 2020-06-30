(function () {
  'use strict';
  angular.module('myFirstApp', [])
  .controller('myFirstController',myFirstController);

  myFirstController.$inject = ['$scope'];

  function myFirstController($scope){
    $scope.name = "joseline";
  });

})();
