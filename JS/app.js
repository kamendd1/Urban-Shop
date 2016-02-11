(function () {
    'use strict';
    var PARTIALS_PREFIX = 'views/partials/';
    var CONTROLLER_VIEW_MODEL = 'vm';

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: PARTIALS_PREFIX + 'home/home.html',
                controller: 'HomeController',
                controllerAs: CONTROLLER_VIEW_MODEL
            })
            .when('/register', {
                templateUrl: PARTIALS_PREFIX + 'identity/register.html',
                controller: 'SignUpCtrl',
                controllerAs: CONTROLLER_VIEW_MODEL

            })
            .when('/login', {
                templateUrl: PARTIALS_PREFIX + 'identity/login.html',
                controller: 'LoginCtrl',
                controllerAs: CONTROLLER_VIEW_MODEL

            })
            .when('/unauthorized', {
                template:'<h1>YOU are not authorized</h1>'
            })
            .when('/addoffer',{
                templateUrl: PARTIALS_PREFIX + 'offers/addoffer.html',
                controller: 'OffersController',
                controllerAs: CONTROLLER_VIEW_MODEL
            })
            .when('/alloffers', {
                templateUrl: PARTIALS_PREFIX + 'offers/alloffers.html',
                controller: 'AllOffersController',
                controllerAs: CONTROLLER_VIEW_MODEL
            })
            .when('/offers/:id',{
                templateUrl: PARTIALS_PREFIX + 'offers/offerdetails.html',
                controller: 'OfferDetailsController',
                controllerAs: CONTROLLER_VIEW_MODEL
            })
            .when('/offers/:id/addcomment',{
                templateUrl: PARTIALS_PREFIX + 'comments/addcomment.html',
                controller: 'CommentController',
                controllerAs: CONTROLLER_VIEW_MODEL
            })
            .when('/about',{
                templateUrl: PARTIALS_PREFIX + 'static/about.html',
                controller: 'OfferDetailsController',
                controllerAs: CONTROLLER_VIEW_MODEL
            })
            .when('/contact',{
                templateUrl: PARTIALS_PREFIX + 'static/contact.html',
                controller: 'OfferDetailsController',
                controllerAs: CONTROLLER_VIEW_MODEL
            })
            .when('/blog',{
                templateUrl: PARTIALS_PREFIX + 'static/blog.html',
                controller: 'OfferDetailsController',
                controllerAs: CONTROLLER_VIEW_MODEL
            })
            .otherwise({ redirectTo: '/' });
    }

    angular.module('myApp.services', []);
    angular.module('myApp.directives', []);
    angular.module('myApp.filters', []);
    angular.module('myApp.controllers', ['myApp.services']);
    angular.module('myApp', ['ngRoute', 'ngCookies', 'myApp.filters', 'myApp.controllers', 'myApp.directives']).
        config(['$routeProvider', config])
        .value('toastr', toastr)
        .constant('baseServiceUrl', 'https://api.parse.com/1/apps/urbanshop--2/');
}());