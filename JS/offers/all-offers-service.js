/**
 * Created by Kamen on 25.1.2016 г..
 */
(function(){
    'use strict';

    function allOffers(data) {
        var PROJECTS_URL = 'api/projects';

        function getAllOffers() {
            return database.get({

            });
        }

/*        function filterTrips(filters) {
            return data.get(PROJECTS_URL + '/all', filters);
        }

        function createTrip(trip) {
            return data.post(PROJECTS_URL, trip);
        }

        function projectDetails(trip){
            return data.get(PROJECTS_URL + '/{{trip.Id}}', trip)
        }*/

        return {
            getAllOffers: getAllOffers,
/*            createTrip: createTrip,
            filterTrips: filterTrips,
            projectDetails: projectDetails*/
        }
    }

    angular.module('myApp.services')
        .factory('allOffers', ['data', allOffers])
}());