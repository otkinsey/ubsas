'use strict';

/*Services*/

var myAppServices = angular.module('myAppServices', ['ngResource']);

myAppServices.factory('Content', ['$resource',
function($resource){
  return $resource('json/:contentId.json', {}, {
    query:{method: 'GET', params:{contentId:'content'}, isArray:true}
  });
}]);

myAppServices.factory('BulletPoints', ['$resource', function($resource){
  return $resource('json/bullet_points/:contentId.json', {}, {
    query:{method:'GET', params:{contentId:'content'}}
  });
}]);


myAppServices.factory('SidePanel', ['$resource', function($resource){
  return $resource('json/side_menu.json', {}, {
    query:{method:'GET', isArray:true}
  });
}]);

myAppServices.factory('FooterLinks', ['$resource', function($resource){
  return $resource('json/footerLinks.json', {}, {
    query:{method:'GET'}
  });
}]);
