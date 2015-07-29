'use strict';

var myAppControllers = angular.module('myAppControllers',[]);

myAppControllers.controller('ContentQuery', ['$scope', 'Content', '$routeParams',
 function($scope, Content, $routeParams){
  $scope.contentItems = Content.query();
  $scope.contentPath = $routeParams.contentId;
  //$scope.picked = $scope.contentOptions[0];
}]);

myAppControllers.controller('ContentCtrl', ['$scope', '$routeParams', 'Content',
 function($scope, $routeParams, Content){
   $scope.pageContent = Content.get({contentId: $routeParams.contentId});

 }]);
