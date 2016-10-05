'use strict';
airportModels.$inject = ['airportsRawData', 'airportModelFactory'];

export default airportModels;

function airportModels(airportsRawData, airportModelFactory) {
    const that = this;
    that.airports = {};
    that.getAirports = getAirports;

    Object.keys(airportsRawData).forEach(airportName => {
        that.airports[airportName] = airportModelFactory.newInstance(airportsRawData[airportName]);
    });

    function getAirports() {
        return that.airports;
    }
}