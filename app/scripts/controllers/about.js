'use strict';

/**
 * @ngdoc function
 * @name imcoDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the imcoDemoApp
 */
angular.module('imcoDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
