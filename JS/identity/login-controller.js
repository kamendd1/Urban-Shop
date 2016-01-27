/**
 * Created by Kamen on 26.1.2016 г..
 */
(function () {
    'use strict';


    function LoginCtrl($scope, $location,auth, notifier) {

        $scope.login = function (user) {
            console.log('reg cont - log in');

            auth.login(user).then(function () {
                notifier.success('Logged in successfully!');
                $location.path('/');
            }, function (error) {
                notifier.error(error);
            })
        }


        $scope.logout = function () {
            auth.logout().then(function () {
                notifier.success('Successful logout!');
                if ($scope.user) {
                    $scope.user.email = '';
                    $scope.user.username = '';
                    $scope.user.password = '';
                }

                $scope.loginForm.$setPristine();
                $location.path('/');
            })
        }
    }

    angular.module('myApp.controllers')
        .controller('LoginCtrl', ['$scope', '$location', 'auth', 'notifier', LoginCtrl]);
}());