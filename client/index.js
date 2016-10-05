'use strict';
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngRoute from 'angular-route';
import './index.css';
import '../node_modules/angular-material/angular-material.css';
import dispatcher from './components/dispatcher/dispatcher.service.js';
import airportsRawData from 'json!../server/data/airports.json';

console.log(airportsRawData);

angular.module('main', [ngMaterial, ngRoute])
    .controller('mainController', mainController)
    .service('dispatcher', dispatcher)
    .value('airportsRawData', airportsRawData);

function mainController() {
    console.log('main controller!');
}
require('./components/airportModel/airportModel.factory');
require('./components/flightsSearch/flightsSearch.component');
require('./components/flightsSearch/flightsSearch.service');

