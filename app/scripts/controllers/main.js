'use strict';

/**
 * @ngdoc function
 * @name imcoDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the imcoDemoApp
 */
angular.module('imcoDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
