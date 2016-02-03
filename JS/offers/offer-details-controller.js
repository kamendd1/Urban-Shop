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
                    vm.offers = offers;
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
                    vm.comments = comments;
                } else {
                    comments = [{
                        error: 'No Comments to Display!'
                    }]
                }
            })


        //statistics.getStats()
        //.then(function (stats) {
        //    vm.stats = stats;
        //    console.log(stats);
        //})

        //trips.getPublicTrips()
        //.then(function (tripsResp) {
        //    vm.publicTrips = tripsResp;
        //    console.log(tripsResp);
        //})

        //drivers.getPublicDrivers()
        //.then(function (driversResp) {
        //    vm.publicDrivers = driversResp;
        //    console.log(driversResp);
        //})

    }
    angular.module('myApp.controllers')
        .controller('OfferDetailsController', ['$routeParams', '$scope', 'offersService', 'commentsService', OfferDetailsController])
}());