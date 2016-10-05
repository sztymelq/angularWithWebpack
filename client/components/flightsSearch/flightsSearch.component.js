(function () {
    'use strict';

    angular.module('main').component('flightsSearch', {
            bindings: {},
            templateUrl: 'components/flightsSearch/flightsSearch.html',
            controller: flightsSearchCtrl
        });

    flightsSearchCtrl.$inject = ['dispatcher', 'airportModelFactory'];

    function flightsSearchCtrl(dispatcher, airportModelFactory) {
        const that = this;
        that.search = search;

        const airportModel = airportModelFactory.newInstance();


        function search() {
            console.log('search!');

            dispatcher.notify('elo', {siema: 1234});
        }
    }

})();