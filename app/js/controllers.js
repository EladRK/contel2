'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])
  .controller('HomeController', ['$scope', function($scope) {

  }])
  .controller('AlertsController', ['$scope', function($scope) {

  }])
  .controller('AdminController', ['$scope', function($scope) {

  }])
  .controller('AboutController', ['$scope', function($scope) {

  }])
  .controller('IndexController', ['$scope', function($scope) {

  	$scope.locations = ['ramat gan', 'tel aviv'];

  	$scope.isMenuOpen = false;

  }]);
