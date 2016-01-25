/**
 * Created by Kamen on 25.1.2016 г..
 */
(function () {
    'use strict';
    function offersService($http, $q, identity, authorization, baseServiceUrl,database) {

    function addoffer(offer) {
        console.log('auth - sign up');
        console.log(offer);
        var deferred = $q.defer();

        var object = 'Offer';

        var postData = {
            title: offer.title,
            price: offer.price,
            image: offer.image,
            description: offer.description

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

    return {
        addoffer: addoffer
        //login: login,
        //logout: logout,
        //isAuthenticated: isAuthenticated
    }
}

angular.module('myApp.services')
    .factory('offersService', ['$http', '$q', 'identity', 'authorization', 'baseServiceUrl','database', offersService]);
}());

