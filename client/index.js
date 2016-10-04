'use strict';
import angular from 'angular';
//import mainCss from './index.css';
import dispatcher from './dispatcher/dispatcher.service.js';
import airportsRawData from 'json!../server/data/airports.json';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngRoute from 'angular-route';


console.log(airportsRawData);

angular.module('main', [ngMaterial, ngRoute, ngAnimate])
    .controller('mainController', mainController)
    .service('dispatcher', dispatcher)
    .value('airportsRawData', airportsRawData);

function mainController() {
    console.log('main controller!');
}
require('./airportModel/airportModel.factory');
require('./flightsSearch/flightsSearch.component');
require('./flightsSearch/flightsSearch.service');

