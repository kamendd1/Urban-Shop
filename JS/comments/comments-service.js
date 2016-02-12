/**
 * Created by Kamen on 3.2.2016 г..
 */
(function () {
    'use strict';
    function commentsService($q, database, auth) {

        function addComment(comment, offer) {

            var deferred = $q.defer();
            var object = 'Comment';
            var user = auth.getUser();

            var postUser = {
                id: user.objectId,
                username: user.username
            };

            var postData = {
                offerId:offer.objectId,
                offerTitle: offer.title,
                user: postUser,
                content: comment.content
            };

            database.post(object, postData).then(function () {
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

        function getCommentsByOfferId(offerId){
            var object = 'Comment',
                params = 'offerId';

            return database.get(object, params, offerId)
        }

        function getAllComments(){
            var object = 'Comment';

            return database.get(object);
        }

        return {
            addComment: addComment,
            getCommentsByOfferId: getCommentsByOfferId,
            getAll: getAllComments
        }
    }

    angular.module('myApp.services')
        .factory('commentsService', ['$q', 'database', 'auth', commentsService]);
}());