/**
 * Created by Kamen on 25.1.2016 г..
 */
(function () {
    'use strict';

    function OffersController($scope, $location, offersService,commentsService, notifier, auth) {

        $scope.auth = auth;
        $scope.addoffer = function (offer) {
            console.log('reg cont - sign up');

            offersService.addoffer(offer).then(function () {
                notifier.success('Offer added successfully!');
                $location.path('/');
            }, function (error) {
                notifier.error(error);
            })
        };

        var vm = this;
        console.log('tuk sam');
        offersService.getAllOffers()
            .then(function (allOffers) {

                var offers = [];
                if (allOffers) {
                    for (var i = 0; i < allOffers.length; i += 1) {
                        offers.push(allOffers[i].toJSON());
                    }
                    console.log(offers);
                    vm.offers = offers;
                } else {
                    offers = [{
                        error: "No offers to display!"
                    }]
                }
            });

        commentsService.getAll()
            .then(function (allComments) {
                var comments = [];

                if (allComments) {
                    for (var i = 0; i < allComments.length; i += 1) {
                        comments.push(allComments[i].toJSON());
                    }
                    vm.comments = comments.reverse();
                } else {
                    comments = [{
                        error: 'No comments to display!'
                    }]
                }
            });
    }

    angular.module('myApp.controllers').controller('OffersController', ['$scope', '$location', 'offersService','commentsService', 'notifier', 'auth', OffersController]);
}());