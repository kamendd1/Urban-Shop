/**
 * Created by Kamen on 2.2.2016 г..
 */
(function () {
    'use strict';
//TODO: Rename To OffersController
    function OfferDetailsController($routeParams, $scope, offersService, commentsService) {
        var vm = this;
        var offerId = $routeParams.id;
        $scope.offerId = offerId;

        offersService.getOfferById(offerId)
            .then(function (allOffers) {
                console.log('offer controller');

                console.log(allOffers);

                var offers = [];
                if(allOffers){
                    for (var i = 0; i < allOffers.length; i += 1) {
                        offers.push(allOffers[i].toJSON());
                    }
                    console.log(offers);
                    vm.offer = offers[0];
                } else {
                    offers = [{
                        error: "No offers to display!"
                    }]
                }
            });

        commentsService.getCommentsByOfferId(offerId)
            .then(function(allComments){
                var comments = [];
                if(allComments){
                    for (var i= 0; i < allComments.length; i+=1){
                        comments.push(allComments[i].toJSON());
                    }
                    vm.offerComments = comments;
                } else {
                    comments = [{
                        error: 'No Comments to Display!'
                    }]
                }
            });


        offersService.getAllOffers()
            .then(function (allOffers) {
                console.log('offer controller');

                console.log(allOffers);

                var offers = [];
                if(allOffers){
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
            .then(function(allComments){
                var comments = [];

                if(allComments){
                    for(var i = 0; i < allComments.length; i+=1){
                        comments.push(allComments[i].toJSON());
                    }
                    vm.comments = comments.reverse();
                } else {
                    comments = [{
                        error: 'No comments to display!'
                    }]
                }
            })

    }
    angular.module('myApp.controllers')
        .controller('OfferDetailsController', ['$routeParams', '$scope', 'offersService', 'commentsService', OfferDetailsController])
}());