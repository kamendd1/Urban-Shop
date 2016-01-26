(function () {
    'use strict';

    Parse.initialize("FX5qfbCqpaQfSQUUYruolH7YmoN1WwmZSyPZGrcQ", "mln7VPvMITZqcdhY3cpInNPfwLQJFifttmXtttil");

//TODO: refactor
    function auth($http, $q, identity, authorization, baseServiceUrl,database) {
       //NOT USED: var usersApi = baseServiceUrl + '/api/users'

        function signup(user) {
            console.log('auth - sign up');
            console.log(user);

            var deferred = $q.defer();
            var user = new Parse.User();

            var newUserEmail    = document.getElementById("new-user-email").value;
            var newUserPassword = document.getElementById("new-user-password").value;
            var newUsername = document.getElementById('new-username').value;

            var hash = CryptoJS.SHA1(newUserPassword).toString();

            user.set("username", newUsername);
            user.set("password", hash);
            user.set("email", newUserEmail);

            user.signUp(null, {
                success: function(user) {
                    // Hooray! Let them use the app now.
                    deferred.resolve();

                },
                error: function(user, error) {
                    // Show the error message somewhere and let the user try again.
                    alert("Error: " + error.code + " " + error.message);
                }
            });

/*            var deferred = $q.defer();

            var object = 'User';

            var hash = CryptoJS.SHA1(user.password).toString();

            var postData = {
                username:user.username,
                password:hash,
                email:user.email

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
            });*/

            return deferred.promise;


            //var deferred = $q.defer();
            //
            //$http.post(usersApi + '/register', user)
            //    .then(function () {
            //        deferred.resolve();
            //    }, function (response) {
            //        var error = response.data.modelState;
            //        if (error && error[Object.keys(error)[0]][0]) {
            //            error = error[Object.keys(error)[0]][0];
            //        }
            //        else {
            //            error = response.data.message;
            //        }
            //
            //        deferred.reject(error);
            //    });
            //
            //return deferred.promise;
        }

        function login(user) {
            var deferred = $q.defer();

            function login(username, password, callback) {
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
            }
        }


/*            var deferred = $q.defer();
            user['grant_type'] = 'password';
            $http.post(usersApi + '/login', 'username=' + user.username + '&password=' + user.password + '&grant_type=password', {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                .then(function (response) {
                    if (response.data["access_token"]) {
                        identity.setCurrentUser(response.data);
                        deferred.resolve(true);
                    }
                    else {
                        deferred.resolve(false);
                    }
                });

            return deferred.promise;
        }*/
        //
        //function logout() {
        //    var deferred = $q.defer();
        //
        //    var headers = authorization.getAuthorizationHeader();
        //    $http.post(usersApi + '/logout', {}, {headers: headers})
        //        .then(function () {
        //            identity.setCurrentUser(undefined);
        //            deferred.resolve();
        //        });
        //
        //    return deferred.promise;
        //}
        //
        //function isAuthenticated() {
        //    if (identity.isAuthenticated()) {
        //        return true;
        //    }
        //    else {
        //        return $q.reject('not authorized');
        //    }
        //}

        return {
            signup: signup,
            login: login,
            //logout: logout,
            //isAuthenticated: isAuthenticated
        }
    }

    angular.module('myApp.services')
        .factory('auth', ['$http', '$q', 'identity', 'authorization', 'baseServiceUrl','database', auth]);
}());