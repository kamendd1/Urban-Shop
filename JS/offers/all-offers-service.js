/**
 * Created by Kamen on 25.1.2016 г..
 */
(function(){
    'use strict';

    function allOffers(database) {
        console.log('all offers service');
        function getAllOffers() {
            var object= 'Offer',
                params = 'objectId',
                value='XC3atsRlc7';

            return database.get(object);
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
        .factory('allOffers', ['database', allOffers])
}());