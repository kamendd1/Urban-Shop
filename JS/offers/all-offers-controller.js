/**
 * Created by Kamen on 25.1.2016 г..
 */
(function () {
    'use strict';

    function AllOffersController() {
        var vm = this;

        function getAllOffers() {
            return database.get(data);
        }

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
        .controller('AllOffersController', [AllOffersController])
}());