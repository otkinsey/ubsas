'use strict';

/*Services*/

var myAppServices = angular.module('myAppServices', ['ngResource']);

myAppServices.factory('Content', ['$resource',
function($resource){
  return $resource('json/:contentId.json', {}, {
    query:{method: 'GET', params:{contentId:'content'}, isArray:true}
  });
}]);
