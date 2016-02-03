/**
 * Created by Kamen on 3.2.2016 г..
 */
(function () {
    'use strict';
    function commentsService($http, $q, $routeParams, identity, authorization, baseServiceUrl, database, auth) {

        function addComment(comment,offer) {
            console.log('comment - add');


            var deferred = $q.defer();


            var object = 'Comment';

            var user = auth.getUser();

            console.log(user.username);

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

        /*  function getAllOffers() {
         var object = 'Offer';

         return database.get(object);
         }

         function getOfferById(value) {
         var object = 'Offer',
         params = 'objectId';

         return database.get(object,params,value);
         }*/

        return {
            addComment: addComment,
            getCommentsByOfferId: getCommentsByOfferId,
            getAll: getAllComments
            /*getAllOffers: getAllOffers,
             getOfferById:getOfferById*/
        }
    }

    angular.module('myApp.services')
        .factory('commentsService', ['$http', '$q', '$routeParams', 'identity', 'authorization', 'baseServiceUrl', 'database', 'auth', commentsService]);
}());