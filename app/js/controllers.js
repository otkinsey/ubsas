'use strict';

var myAppControllers = angular.module('myAppControllers',[]);

myAppControllers.controller('ContentQuery', ['$scope', 'Content', '$routeParams',
 function($scope, Content, $routeParams){
  $scope.contentItems = Content.query();
  $scope.admin = $scope.contentItems[0];
  $scope.contentPath = $routeParams.contentId;
  //$scope.picked = $scope.contentOptions[0];
}]);

myAppControllers.controller('ContentCtrl', ['$scope', '$routeParams', 'Content',
 function($scope, $routeParams, Content){
   $scope.pageContent = Content.get({contentId: $routeParams.contentId});
   $scope.view = true;
 }]);

myAppControllers.controller('BulletPoints', ['$scope', '$routeParams', 'BulletPoints',
  function($scope, $routeParams, BulletPoints){
    $scope.bulletPoints = BulletPoints.get({contentId: $routeParams.contentId});
}]);

myAppControllers.controller('SidePanel', ['$scope', 'SidePanel',
  function($scope, SidePanel){
    $scope.sideMenuButtons = SidePanel.query();
  }]);

myAppControllers.controller('FooterLinks', ['$scope', 'FooterLinks',
  function($scope, FooterLinks){
    $scope.footerLinks = FooterLinks.query();
}]);
