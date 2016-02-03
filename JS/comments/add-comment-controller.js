/**
 * Created by Kamen on 3.2.2016 г..
 */
(function () {
    'use strict';

    function CommentController($scope, $location,$routeParams, commentsService, notifier, auth) {
        $scope.auth = auth;
        var offerId = $routeParams.id;

        $scope.addcomment = function (comment) {
            console.log('reg cont - sign up');

            commentsService.addComment(comment,offerId).then(function () {
                notifier.success('Comment added successfully!');
                $location.path('/offers/'+offerId);
            }, function (error) {
                notifier.error(error);
            })
        }
    }

    angular.module('myApp.controllers').controller('CommentController', ['$scope', '$location','$routeParams', 'commentsService', 'notifier', 'auth', CommentController]);
}());
