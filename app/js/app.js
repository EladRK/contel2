'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
        $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
        $routeProvider.when('/alerts', {templateUrl: 'partials/alerts.html', controller: 'AlertsController'});
        $routeProvider.when('/admin', {templateUrl: 'partials/admin.html', controller: 'AdminController'});
        $routeProvider.when('/admin/createSite', {templateUrl: 'partials/admin/createSite.html', controller: 'CreateSiteController'});
        $routeProvider.when('/admin/Location/Edit/:locationId', {templateUrl: 'partials/admin/locationEdit.html', controller: 'LocationEditController'});
        $routeProvider.when('/admin/Connector/Edit/:connectorId', {templateUrl: 'partials/admin/ConnectorEdit.html', controller: 'ConnectorEditController'});
        $routeProvider.when('/admin/Location/Create/:locationParentId', {templateUrl: 'partials/admin/CreateLocation.html', controller: 'createLocationController'});
        $routeProvider.when('/admin/Account/CreateUser', {templateUrl: 'partials/admin/CreateUser.html', controller: 'createUserController'});
        $routeProvider.when('/admin/Tag/Edit:locationId', {templateUrl: 'partials/admin/TagEdit.html', controller: 'EditTagController'});
        $routeProvider.when('/admin/Tag/Create:locationId', {templateUrl: 'partials/admin/TagCreate.html', controller: 'CreateTagController'});
        $routeProvider.when('/admin/Connector/Create', {templateUrl: 'partials/admin/CreateConnector.html', controller: 'createConnectorController'});
        $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutController'});
        $routeProvider.when('/location/:locationId', {templateUrl: 'partials/location.html', controller: 'LocationController'});
        $routeProvider.when('/admin/Connector/Index', {templateUrl: 'partials/admin/connector.html', controller: 'ConnectorController'});
        $routeProvider.when('/admin/Account/UserManagment', {templateUrl: 'partials/admin/UserManagment.html', controller: 'UserManagmentController'});
        $routeProvider.when('/admin/Location/EditHomeScreen', {templateUrl: 'partials/admin/EditHomeScreen.html', controller: 'EditHomeScreenController'});
        $routeProvider.when('/admin/SiteSelector', {templateUrl: 'partials/admin/SiteSelector.html', controller: 'SiteSelectorController'});
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
