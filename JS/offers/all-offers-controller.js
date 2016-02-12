/**
 * Created by Kamen on 25.1.2016 г..
 */
(function () {
    'use strict';
//TODO: Rename To OffersController
    function AllOffersController($routeParams, offersService, commentsService) {
        var vm = this;

        var queryParams = $routeParams;
        var displayLimit = 5; // set here number of offers per page
        var page = +queryParams.page || 1;

        vm.currentPage = page;

        offersService.getAllOffers()
            .then(function (allOffers) {


                var offers = [];
                if(allOffers){
                for (var i = 0; i < allOffers.length; i += 1) {
                    offers.push(allOffers[i].toJSON());
                }
                vm.offers = offers;
                } else {
                    offers = [{
                        error: "No offers to display!"
                    }]
                }

                var totalOffers = offers.length;
                var paginatorsCount = totalOffers / displayLimit + 1;
                var paginators = [];

                for (var i = 1; i <= paginatorsCount; i++) {
                    paginators.push(i);
                }

                vm.paginators = paginators;
            });

        offersService.getAllOffersForPaging(displayLimit, page - 1)
            .then(function (allOffers) {


                var offers = [];
                if (allOffers) {
                    for (var i = 0; i < allOffers.length; i += 1) {
                        offers.push(allOffers[i].toJSON());
                    }
                    vm.offersPaging = offers;

                } else {
                    offers = [{
                        error: "No offers to display!"
                    }]
                }
            });

        commentsService.getAll()
            .then(function(allComments){
                var comments = [];

                if(allComments){
                    for(var i = 0; i < allComments.length; i+=1){
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
        .controller('AllOffersController', ['$routeParams', 'offersService', 'commentsService', AllOffersController])
}());