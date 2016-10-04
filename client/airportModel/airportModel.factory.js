(function (global) {
    'use strict';
    angular.module('main').factory('airportModelFactory', airportModelFactory);

    airportModelFactory.$inject = ['airportsRawData', 'dispatcher'];

    function airportModelFactory(airportsRawData, dispatcher) {

        console.log('airportModelFactory', airportsRawData);
        return {
            newInstance
        };

        function newInstance(airport) {
            dispatcher.subscribe(function (event) {
               console.log('airport model!', event);
            });

            return airport;
        }
    }

})(this);