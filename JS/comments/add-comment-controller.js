/**
 * Created by Kamen on 3.2.2016 г..
 */
(function () {
    'use strict';

    function CommentController($scope, $location, $routeParams, commentsService, offersService, notifier, auth) {
        $scope.auth = auth;
        var offerId = $routeParams.id;
        var offer;

        $scope.addcomment = function (comment) {
            console.log('reg cont - sign up');

            offersService.getOfferById(offerId)
                .then(function (allOffers) {

                    var offers = [];
                    if(allOffers){
                        for (var i = 0; i < allOffers.length; i += 1) {
                            offers.push(allOffers[i].toJSON());
                        }
                        offer = offers[0];
                        commentsService.addComment(comment,offer).then(function () {
                            notifier.success('Comment added successfully!');
                            $location.path('/offers/'+offerId);
                        }, function (error) {
                            notifier.error(error);
                        });
                    } else {
                        offers = [{
                            error: "No offers to display!"
                        }]
                    }
                });
        };

        var vm = this;

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

    angular.module('myApp.controllers').controller('CommentController', ['$scope', '$location','$routeParams', 'commentsService', 'offersService', 'notifier', 'auth', CommentController]);
}());
