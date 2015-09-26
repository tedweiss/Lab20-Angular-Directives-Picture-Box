var app = angular.module("pictureBox", []);

app.controller('pictureCtrl', function($scope){
	$scope.pictures = [
		{image: "images/DRWLogo.jpg", caption: "Detroit Red Wings"},
		{image: "images/DTigersLogo.jpg", caption: "Detroit Tigers"},
		{image: "images/sjearthquakes.jpg", caption: "San Jose Earthquakes"},
		{image: "images/movie-lego.jpg", caption: "Lego Movie"},
		{image: "images/movie-harry-potter.jpg", caption: "Harry Potter"},
		{image: "images/movie-godfather.jpg", caption: "The Godfather"},
		{image: "images/IMG_0002.jpg", caption: "Lake and Mountains"},
		{image: "images/Lego.jpg", caption: "Lego"},
		{image: "images/MBG_GBS_logo.jpg", caption: "Beer Homebrewing"},
	];
});

app.controller('classCtrl', function ($scope) {
	$scope.isActive = false;
  $scope.activeButton = function() {
    $scope.isActive = !$scope.isActive;
  }  
});

app.directive("picturex", function(){
	return {
		restrict: "E",
		template: '<div><img src="{{contents.image}}"><p class="base-class">{{contents.caption}}</p></div>',
		repeat: false
	};
});