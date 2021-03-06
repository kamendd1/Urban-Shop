/**
 * Created by Kamen on 26.1.2016 г..
 */
(function () {
    'use strict';


    function LoginCtrl($scope, $location, auth, notifier) {

        $scope.auth = auth;

        $scope.login = function (user) {

            auth.login(user).then(function () {
                notifier.success('Logged in successfully!');
                $location.path('/');
            }, function (error) {
                notifier.error(error);
            })
        };


        $scope.logout = function () {
            auth.logout();
            notifier.success('Successful logout!');
            $location.path('/');
        }
    }

    angular.module('myApp.controllers')
        .controller('LoginCtrl', ['$scope', '$location', 'auth', 'notifier', 'identity', LoginCtrl]);
}());