'use strict';
import angular from 'angular';
import airportsRawData from 'json!../server/data/airports.json';

console.log(airportsRawData);

angular.module('main', [])
    .controller('mainController', mainController)
    .value('airportsRawData', airportsRawData);

function mainController() {
    console.log('main controller!');
}

require('./airportModel/airportModel.factory');
require('./flightsSearch/flightsSearch.component');
require('./flightsSearch/flightsSearch.service');

