(function () {
    'use strict';
/*
    Parse.initialize("FX5qfbCqpaQfSQUUYruolH7YmoN1WwmZSyPZGrcQ", "mln7VPvMITZqcdhY3cpInNPfwLQJFifttmXtttil");
*/

    function data($q, notifier, authorization) {

        function getPaging (object, displayLimit,page) {
            var deferred = $q.defer();
            var authHeader = authorization.getAuthorizationHeader();
            var dbObject = Parse.Object.extend(object);
            var query = new Parse.Query(dbObject);

            query.descending('createdAt');
            query.limit(displayLimit);
            query.skip(displayLimit*page);
            query.find({
                success: function (response) {
                    deferred.resolve(response); //.data i property
                },
                error: function (error) {
                    error = getErrorMessage(error);
                    notifier.error(error);
                    deferred.reject(error)
                }
            });
            return deferred.promise;
        }

        function get(object, params, value) {
            var deferred = $q.defer();
            var authHeader = authorization.getAuthorizationHeader();
            var dbObject = Parse.Object.extend(object);
            var query = new Parse.Query(dbObject);

            query.equalTo(params, value);
            query.find({
                success: function (response) {
                    deferred.resolve(response); //.data i property
                },
                error: function (error) {
                    error = getErrorMessage(error);
                    notifier.error(error);
                    deferred.reject(error)
                }
            });
            return deferred.promise;
        }

        function post(object, postData) {
            var deferred = $q.defer();
            var authHeader = authorization.getAuthorizationHeader();
            var DbObject = Parse.Object.extend(object);
            var dbObject = new DbObject();


            dbObject.save(postData).then(function () {
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
            put: put,
            getPaging: getPaging
        }
    }
    angular.module('myApp.services')
        .factory('database', ['$q','notifier', 'authorization', data])
}());