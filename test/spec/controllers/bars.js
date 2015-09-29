'use strict';

describe('Controller: BarsCtrl', function() {

    // load the controller's module
    beforeEach(module('imcoDemoApp'));

    var BarsCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        BarsCtrl = $controller('BarsCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function() {
        expect(scope.dataTest.length).toBe(32);
    });
});
