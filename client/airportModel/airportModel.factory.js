(function (global) {
    'use strict';
    angular.module('main').factory('airportModelFactory', airportModelFactory);

    airportModelFactory.$inject = ['airportsRawData'];

    function airportModelFactory(airportsRawData) {

        console.log('airportModelFactory', airportsRawData);
        return {
            newInstance
        };

        function newInstance(airport) {


            return airport;
        }
    }

})(this);