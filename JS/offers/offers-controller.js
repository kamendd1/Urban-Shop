/**
 * Created by Kamen on 25.1.2016 г..
 */
(function () {
    'use strict';

    function OffersController($scope, $location, offersService, notifier) {
        $scope.addoffer = function (offer) {
            console.log('reg cont - sign up');

            offersService.addoffer(offer).then(function () {
                notifier.success('Offer added successfully!');
                $location.path('/');
            }, function (error) {
                notifier.error(error);
            })
        }
    }

    angular.module('myApp.controllers').controller('OffersController', ['$scope', '$location', 'offersService', 'notifier', OffersController]);
}());