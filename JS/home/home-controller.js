(function () {
    'use strict';

    function HomeController() {
        var vm = this;

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
        .controller('HomeController', [HomeController])
}());