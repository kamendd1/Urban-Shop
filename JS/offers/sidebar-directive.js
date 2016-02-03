/**
 * Created by Kamen on 3.2.2016 г..
 */
(function(){
    'use strict';

    function latestCommentsAndOffers(){
        return{
            restrict: 'A',
            templateUrl: 'views/directives/sidebar-directive.html'
        };
    }

    angular.module('myApp.directives')
        .directive('sidebar', [latestCommentsAndOffers]);
}());