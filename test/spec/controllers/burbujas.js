'use strict';

describe('Controller: BurbujasCtrl', function () {

  // load the controller's module
  beforeEach(module('imcoDemoApp'));

  var BurbujasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BurbujasCtrl = $controller('BurbujasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
