'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MyCtrl1', ['$scope', function ($scope) {

    }])
    .controller('MyCtrl2', ['$scope', function ($scope) {

    }])
    .controller('HomeController', ['$scope', '$http', function ($scope, $http) {

        $scope.getTags = function () {

            $http({
                method: 'GET',
                url: 'http://54.203.251.4/LaScada-WebApi/api/Tag/1018?LocationId=2259'
            }).
                success(function (data, status, headers, config) {

                    console.log(data);
                }).
                error(function (data, status, headers, config) {

                });
        }

    }])
    .controller('AlertsController', ['$scope', '$http', function ($scope, $http) {

    }])
    .controller('AdminController', ['$scope', function ($scope) {

    }])
    .controller('AboutController', ['$scope', function ($scope) {
  }])
    .controller('createLocationController', ['$scope', '$routeParams', function ($scope, $routeParams) {

        $scope.locationId = $routeParams.locationId
    }])
    .controller('EditTagController', ['$scope', function ($scope) {

    }])
    .controller('CreateTagController', ['$scope', function ($scope) {

    }])
    .controller('createUserController', ['$scope', function ($scope) {

    }])
    .controller('LocationController', ['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.locationId = $routeParams.locationId
    }])
    .controller('LocationEditController', ['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.locationId = $routeParams.locationId
    }])
    .controller('IndexController', ['$scope', '$http', function ($scope, $http) {


        $scope.isMenuOpen = false;

        $scope.getLocations = function () {
            var siteId = '10';

            $http({
                method: 'GET',
                url: 'http://54.203.251.4/lascada-webapi/api/Location/' + siteId
            }).
                success(function (data, status, headers, config) {

                    setLocations(data)
                }).
                error(function (data, status, headers, config) {

                });
        };

        function setLocations(rawData) {
            var locations = [];

            var locationMap = {};

            for (var i = rawData.length - 1; i >= 0; i--) {
                var locationId = rawData[i].LocationId;
                var locationParentId = rawData[i].LocationId;
                locationMap[locationId] = rawData[i];
            };

            for (var i = rawData.length - 1; i >= 0; i--) {
                var locationId = rawData[i].LocationId;
                var locationParentId = rawData[i].LocationParentId;
                locationMap[locationId] = rawData[i];

                if (locationParentId == 0) {
                    locations.push(rawData[i]);
                }
                else {
                    if (!locationMap[locationParentId].childLocations)
                        locationMap[locationParentId].childLocations = [];
                    locationMap[locationParentId].childLocations.push(rawData[i]);
                }

            };

            $scope.locations = locations;
        }

        $scope.getLocations();

    }])
    .controller('ConnectorController', ['$scope', function ($scope) {
    }])
    .controller('UserManagmentController', ['$scope', function ($scope) {
    }])
    .controller('SiteSelectorController', ['$scope', '$http', function ($scope, $http) {

            $http({
                method: 'GET', 
                url: 'http://54.203.251.4/lascada-webapi/api/site/GetUserSites'
            }).
                success(function (data, status, headers, config) {

                    console.log(data);

                }).
                error(function (data, status, headers, config) {

                });

    }])
    .controller('EditHomeScreenController', ['$scope', function ($scope) {
    }]);
