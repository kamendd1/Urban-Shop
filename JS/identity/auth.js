(function () {
    'use strict';

    Parse.initialize("FX5qfbCqpaQfSQUUYruolH7YmoN1WwmZSyPZGrcQ", "mln7VPvMITZqcdhY3cpInNPfwLQJFifttmXtttil");

//TODO: refactor
    function auth($q) {

        var userKey;
        // get all keys of the local storage
        var keys = Object.keys(localStorage);

        //find the key with the user
        for(var i = 0; i<keys.length; i++){
            if(keys[i].toString().endsWith('User')){
                userKey = keys[i];
            }
        }

        //get info of the user
        var loggedInUser = localStorage.getItem(userKey);
        loggedInUser = JSON.parse(loggedInUser);

        function signup(user) {

            var deferred = $q.defer();
            var parseUser = new Parse.User();

            parseUser.set("username", user.username);
            parseUser.set("password", CryptoJS.SHA1(user.password).toString());
            parseUser.set("email", user.email);

            parseUser.signUp(null,
                {
                    success: function(user) {
                        // Hooray! Let them use the app now.
                        loggedInUser = user;
                        deferred.resolve();
                    },
                    error: function (user, error) {
                        // Show the error message somewhere and let the user try again.
                        deferred.reject(error.message);
                    }
                });

            return deferred.promise;


        }

        function login(user) {
            var deferred = $q.defer();

            var username = user.username;
            var password = user.password;
            var hash = CryptoJS.SHA1(password).toString();

            Parse.User.logIn(username, hash, {
                success: function (user) {
                    loggedInUser = user;
                    deferred.resolve();
                    console.log(user)
                },
                error: function (user, error) {
                    deferred.reject(error.message);
                    //alert("Error: " + error.message);
                }
            });
            return deferred.promise;
        }

        function logout(){
            Parse.User.logOut();
            loggedInUser = null;
        }

        function getUser() {
            if (loggedInUser) {
                return loggedInUser;
            }
            return null;
        }

        function isAuthenticated() {
            return !!this.getUser();
        }

        return {
            signup: signup,
            login: login,
            logout: logout,
            getUser:getUser,
            isAuthenticated: isAuthenticated
        }
    }

    angular.module('myApp.services')
        .factory('auth', ['$q', auth]);
}());