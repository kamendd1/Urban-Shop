(function () {
    'use strict';
    Parse.initialize("FX5qfbCqpaQfSQUUYruolH7YmoN1WwmZSyPZGrcQ", "mln7VPvMITZqcdhY3cpInNPfwLQJFifttmXtttil");

    function data($http, $q,notifier, baseServiceUrl,authorization) {

        function get(url, queryParams) {
            var defered = $q.defer();
            var authHeader = authorization.getAuthorizationHeader();


            $http.get(baseServiceUrl + '/' + url, {
                params: queryParams,
                headers: authHeader })
                .then(function (response) {
                    defered.resolve(response.data); //.data i property
                }, function (error) {
                    error = getErrorMessage(error);
                    notifier.error(error);
                    defered.reject(error)
                })
            return defered.promise;
        }

        function post(object, postData) {
            var deferred = $q.defer();
            var authHeader = authorization.getAuthorizationHeader();

            var DbObject = Parse.Object.extend(object);
            var dbObject = new DbObject();


            dbObject.save(postData).then(function () {
                console.log('saving data');

                deferred.resolve();

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

        function put() {

            throw new Error('not implemented')
        }

        function getErrorMessage(response) {
            var error = response.data.modelState;
            if (error && error[Object.keys(error)[0]][0]) {
                error = error[Object.keys(error)[0]][0];
            }
            else {
                error = response.data.message;
            }

            return error;
        }

        return {
            get: get,
            post: post,
            put: put
        }
    }
    angular.module('myApp.services')
        .factory('database', ['$http', '$q','notifier', 'baseServiceUrl','authorization', data])
}());