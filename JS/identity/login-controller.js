/**
 * Created by Kamen on 26.1.2016 г..
 */
(function () {
    'use strict';
    Parse.initialize("FX5qfbCqpaQfSQUUYruolH7YmoN1WwmZSyPZGrcQ", "mln7VPvMITZqcdhY3cpInNPfwLQJFifttmXtttil");


    function LoginCtrl($scope, $location, notifier, identity, auth) {

/*        function login (username, password, callback) {
                Parse.User.logIn(username, password, {
                    success: function (user) {
                        var loggedInUser = user;
                        callback(user);
                        console.log(user)
                    },
                    error: function (user, error) {
                        alert("Error: " + error.message);
                    }
                });
            }*/

/*        $scope.identity = identity;

        function loginSuccessful(user) {
            $rootScope.$apply(function() {
                $rootScope.currentUser = Parse.User.current();
                $location.path("/");
            });
        }

        function loginUnsuccessful(user, error) {
            alert("Error: " + error.message + " (" + error.code + ")");
        }

        $scope.login = function() {
            var username = $scope.login.username;
            var password = $scope.login.password;

            console.log(username);
            console.log(password);

            Parse.User.logIn(username, password, {
                success: loginSuccessful,
                error: loginUnsuccessful
            });
        }*/;

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