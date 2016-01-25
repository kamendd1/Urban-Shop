//TODO:PARSE
(function () {
    'use strict';

    function data($http, $q,notifier, baseServiceUrl,authorization) {

        function get(url,queryParams) {
            var defered = $q.defer();
            var authHeader = authorization.getAuthorizationHeader();


            $http.get(baseServiceUrl + '/' + url, { params: queryParams, headers: authHeader })
                .then(function (response) {
                    defered.resolve(response.data); //.data i property
                }, function (error) {
                    error = getErrorMessage(error);
                    notifier.error(error);
                    defered.reject(error)
                })
            return defered.promise;
        }

        function post(url, postData) {
            var defered = $q.defer();
            var authHeader = authorization.getAuthorizationHeader();

            $http.post(baseServiceUrl + '/' + url, postData, { headers: authHeader })
                .then(function (response) {
                    defered.resolve(response.data); //.data i property
                }, function (error) {
                    error = getErrorMessage(error);
                    notifier.error(error);
                    defered.reject(error)
                })
            return defered.promise;

        }

        function put() {

            throw new Error('not implmented')
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
        .factory('data', ['$http', '$q','notifier', 'baseServiceUrl','authorization', data])
}());