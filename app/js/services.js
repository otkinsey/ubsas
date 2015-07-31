'use strict';

/*Services*/

var myAppServices = angular.module('myAppServices', ['ngResource']);

myAppServices.factory('Content', ['$resource',
function($resource){
  return $resource('json/:contentId.json', {}, {
    query:{method: 'GET', params:{contentId:'content'}, isArray:true}
  });
}]);

myAppServices.factory('InfoBox', ['$resource', function($resource){
  return $resource('json/:infoBoxId.json', {}, {
    query:{method: 'GET', params:{infoBoxId:'infoBox'}, isArray:true}
  });
}]);
