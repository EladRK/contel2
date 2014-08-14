'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
  $routeProvider.when('/alerts', {templateUrl: 'partials/alerts.html', controller: 'AlertsController'});
  $routeProvider.when('/admin', {templateUrl: 'partials/admin.html', controller: 'AdminController'});
  $routeProvider.when('/admin/createSite', {templateUrl: 'partials/admin/createSite.html', controller: 'CreateSiteController'});
  $routeProvider.when('/admin/Location/Edit/:locationId', {templateUrl: 'partials/admin/locationEdit.html', controller: 'LocationEditController'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutController'});
  $routeProvider.when('/location/:locationId', {templateUrl: 'partials/location.html', controller: 'LocationController'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
