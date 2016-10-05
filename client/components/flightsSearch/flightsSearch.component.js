'use strict';
flightsSearchCtrl.$inject = ['dispatcher', 'airportModels'];

const flightsSearchComponent = {
    bindings: {},
    templateUrl: 'components/flightsSearch/flightsSearch.html',
    controller: flightsSearchCtrl
};

export default flightsSearchComponent;


function flightsSearchCtrl(dispatcher, airportModels) {
    const that = this;
    that.airportModels = airportModels.airports;
    that.search = search;
    that.isResultVisible = true;

    function search() {
        console.log('airportModels.airports', airportModels.airports);
        that.isResultVisible = !that.isResultVisible;
    }
}
