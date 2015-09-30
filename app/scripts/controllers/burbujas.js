'use strict';

/**
 * @ngdoc function
 * @name imcoDemoApp.controller:BurbujasCtrl
 * @description
 * # BurbujasCtrl
 * Controller of the imcoDemoApp
 */
angular.module('imcoDemoApp')
    .controller('BurbujasCtrl', function($scope, datos) {
        $scope.datos = datos.getPIBEstados();
        console.debug($scope.datos);
    });
