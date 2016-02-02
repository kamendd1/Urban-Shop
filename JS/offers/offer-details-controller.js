/**
 * Created by Kamen on 2.2.2016 г..
 */
(function () {
    'use strict';
//TODO: Rename To OffersController
    function OfferDetailsController($routeParams, offersService) {
        var vm = this;
        var offerId = $routeParams.id;


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
        .controller('OfferDetailsController', ['$routeParams', 'offersService', OfferDetailsController])
}());