'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]);
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl:'view1/templates/home.html'
  }).
  when('/home', {
    templateUrl:'view1/templates/home.html'
  }).
  when('/major_explorers', {
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
  }).
  otherwise({redirectTo: '/home'});
}]);
