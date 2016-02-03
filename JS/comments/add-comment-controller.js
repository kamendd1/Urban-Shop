/**
 * Created by Kamen on 3.2.2016 г..
 */
(function () {
    'use strict';

    function CommentController($scope, $location,$routeParams, commentsService, offersService, notifier, auth) {
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
                    } else {
                        offers = [{
                            error: "No offers to display!"
                        }]
                    }
                });

            commentsService.addComment(comment,offer).then(function () {
                notifier.success('Comment added successfully!');
                $location.path('/offers/'+offerId);
            }, function (error) {
                notifier.error(error);
            })
        }
    }

    angular.module('myApp.controllers').controller('CommentController', ['$scope', '$location','$routeParams', 'commentsService', 'offersService', 'notifier', 'auth', CommentController]);
}());
