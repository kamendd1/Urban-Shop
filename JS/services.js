//(function () {
//    'use strict';
//
//    /* Services */
//
//    function author($scope, $q) {
//        // Initialize Parse API and objects.
//        Parse.initialize("FX5qfbCqpaQfSQUUYruolH7YmoN1WwmZSyPZGrcQ", "mln7VPvMITZqcdhY3cpInNPfwLQJFifttmXtttil");
//
//        // Cache current logged in user
//        var loggedInUser;
//
//        var ParseService = {
//            name: "Parse",
//
//            // Login a user
//            login: function login(username, password, callback) {
//                Parse.User.logIn(username, password, {
//                    success: function (user) {
//                        loggedInUser = user;
//                        callback(user);
//                    },
//                    error: function (user, error) {
//                        alert("Error: " + error.message);
//                    }
//                });
//            },
//
//            // Register a user
//            signUp: function signUp(username, password, callback) {
//                console.log('parse sign');
//                var User = Parse.Object.extend("User");
//                var user = new User();
//                user.save({username: username,password:password,email:username}).then(function(object) {
//                    alert('Working');
//                });
//
//                //Parse.User.signUp(username, password, {ACL: new Parse.ACL()}, {
//                //    success: function (user) {
//                //        loggedInUser = user;
//                //        callback(user);
//                //    },
//                //
//                //    error: function (user, error) {
//                //        alert("Error: " + error.message);
//                //    }
//                //});
//            },
//
//            // Logout current user
//            logout: function logout(callback) {
//                Parse.User.logOut();
//            },
//
//            // Get current logged in user
//            getUser: function getUser() {
//                if (loggedInUser) {
//                    return loggedInUser;
//                }
//            }
//
//        };
//
//        // The factory function returns ParseService, which is injected into controllers.
//        return ParseService;
//    }
//
//    angular.module('myApp.services')
//        .factory('ParseService', ['$scope', '$q', author]);
//
//}());
//
