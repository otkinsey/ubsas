'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'myAppServices',
  'myAppControllers'
]);
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/home',{
    templateUrl:'view1/index.html',
    controller:'ContentCtrl'
  }).
  when('/view1/:contentId',{
    templateUrl:'view1/index.html',
    controller:'ContentCtrl'
  }).
   when('/view2/:contentId', {
    templateUrl:'view2/index.html',
    controller: 'ContentQuery'
  }).
  /*when('/major_explorers', {
    templateUrl:'view1/templates/major_explorers.html'
  }).
  when('/alternative_majors', {
    templateUrl:'view1/templates/alternative_majors.html'
  }).
  when('/resources', {
    templateUrl:'view1/templates/resources.html'
  }).
  when('/sas_staff', {
    templateUrl:'view1/templates/sas_staff.html'
  }).*/
  otherwise({redirectTo: 'view1/home'});
}]);
