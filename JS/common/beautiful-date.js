/**
 * Created by Kamen on 3.2.2016 г..
 */
(function () {
    'use strict';

    function beautify() {
        return function (input) {
            var monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];

            var date = new Date(input);
            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();

            // get time

            return monthNames[monthIndex] + ' ' + day + ', ' + year;
        }
    }

    angular.module('myApp.filters')
        .filter('beautifulDate', [beautify]);
}());