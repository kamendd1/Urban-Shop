/**
 * Created by Kamen on 3.2.2016 г..
 */
(function(){
    'use strict';

    function commentsAndOffers(){
        return {
            restrict: 'A',
            templateUrl: 'views/directives/footer-top-directive.html'
        };
    }

    angular.module('myApp.directives')
        .directive('footertop', [commentsAndOffers]);
}());