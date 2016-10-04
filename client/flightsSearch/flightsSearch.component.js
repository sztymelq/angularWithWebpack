(function (global) {
    'use strict';

    angular.module('main').component('flightsSearch', {
            bindings: {},
            templateUrl: 'flightsSearch/flightsSearch.html',
            controller: flightsSearchCtrl
        });

    function flightsSearchCtrl() {
        console.log('flightsSearchCtrl');
    }

})(this);