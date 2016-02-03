/**
 * Created by Kamen on 25.1.2016 г..
 */
(function () {
    'use strict';
    function offersService($http, $q, $routeParams, identity, authorization, baseServiceUrl, database, auth) {

        function addoffer(offer) {
            console.log('auth - sign up');
            console.log(offer);
            var deferred = $q.defer();

            var object = 'Offer';
            var user = auth.getUser();

            var postUser = {
                id: user.objectId,
                username: user.username
            };

            var postData = {
                title: offer.title,
                price: offer.price,
                image: offer.image,
                description: offer.description,
                postedBy: postUser

            };

            console.log(postData);

            database.post(object, postData).then(function () {
                console.log('reg');

                deferred.resolve();
                console.log('reg');

            }, function (response) {
                var error = response.data.modelState;
                if (error && error[Object.keys(error)[0]][0]) {
                    error = error[Object.keys(error)[0]][0];
                }
                else {
                    error = response.data.message;
                }

                deferred.reject(error);
            });

            return deferred.promise;
        }

        function getAllOffers() {
            var object = 'Offer';

            return database.get(object);
        }

        function getAllOffersForPaging (displayLimit,page) {
            var object = 'Offer';
            return database.getPaging(object,displayLimit,page);
        }

        function getOfferById(value) {
            var object = 'Offer',
                params = 'objectId';

            return database.get(object,params,value);
        }

        return {
            addoffer: addoffer,
            getAllOffers: getAllOffers,
            getOfferById: getOfferById,
            getAllOffersForPaging: getAllOffersForPaging
        }
    }

    angular.module('myApp.services')
        .factory('offersService', ['$http', '$q', '$routeParams', 'identity', 'authorization', 'baseServiceUrl', 'database', 'auth', offersService]);
}());
