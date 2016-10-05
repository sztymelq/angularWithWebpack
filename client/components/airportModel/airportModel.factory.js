'use strict';
airportModelFactory.$inject = ['dispatcher'];

export default airportModelFactory;

function airportModelFactory(dispatcher) {
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