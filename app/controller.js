angular.module('myapp').controller('MapCoordinatesCtrl', ['eqService', '$scope', function(eqService, $scope) {
	var TILE_SIZE = 256;
	var marker, map;

	eqService.eq().then(function(data) {
		$scope.eqdata = data.earthquakes;
	});

	$scope.$on('mapInitialized', function(event, gmap) {
		map = gmap;
		new google.maps.event.trigger(gmap, "resize");
	});

	$scope.click = function() {

		var data = $scope.eqdata[this.id];
		var contentString = '<div>' + data.region + ' <br>magnitude: ' + data.magnitude +
			',<br>Occurence time: ' + data.timedate +
			',<br>Depth: ' + data.depth + '</div>';
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		infowindow.open(map, this);

	};

}]);