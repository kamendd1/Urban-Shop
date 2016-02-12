(function () {
    'use strict';

    function HomeController(offersService, commentsService) {
        var vm = this;

        offersService.getAllOffers()
            .then(function (allOffers) {

                var offers = [];
                if (allOffers) {
                    for (var i = 0; i < allOffers.length; i += 1) {
                        offers.push(allOffers[i].toJSON());
                    }
                    vm.offers = offers;
                } else {
                    offers = [{
                        error: "No offers to display!"
                    }]
                }
            });

        commentsService.getAll()
            .then(function (allComments) {
                var comments = [];

                if (allComments) {
                    for (var i = 0; i < allComments.length; i += 1) {
                        comments.push(allComments[i].toJSON());
                    }
                    vm.comments = comments.reverse();
                } else {
                    comments = [{
                        error: 'No comments to display!'
                    }]
                }
            });


    }

    angular.module('myApp.controllers')
        .controller('HomeController', ['offersService','commentsService',HomeController])
}());