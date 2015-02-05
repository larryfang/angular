describe('Controller: MapCoordinatesCtrl', function() {
  var scope;
  var service = {
    eq: function() {

    }
  };
  beforeEach(angular.mock.module('myapp'));

  it('should be able to create MapCoordinatesController', inject(function($rootScope, $controller) {
    scope = $rootScope.$new();

    var ctrl = $controller('MapCoordinatesCtrl', {
      $scope: scope
    });

    expect(ctrl).not.toEqual(null);
  }));

  it('Should call Service eq', inject(function($rootScope, $controller) {
    var promise = {
      then: jasmine.createSpy()
    };
    scope = $rootScope.$new();
    spyOn(scope, '$on').and.callFake(function() {});

    spyOn(service, "eq").and.returnValue(promise);
    var ctrl = $controller('MapCoordinatesCtrl', {
      eqService: service,
      $scope: scope
    });
    promise.then.calls.mostRecent().args[0]([{}, {}, {}]);
  }));


});