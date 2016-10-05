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
import airportModelFactory from './components/airportModel/airportModel.factory';
import airportModels from './components/airportModel/airportModels.service';
import flightsSearchComponent from './components/flightsSearch/flightsSearch.component';

angular.module('main', [ngMaterial, ngRoute, ngAnimate])
    .controller('mainController', mainController)
    .service('dispatcher', dispatcher)
    .value('airportsRawData', airportsRawData)
    .factory('airportModelFactory', airportModelFactory)
    .service('airportModels', airportModels)
    .component('flightsSearch', flightsSearchComponent);


console.log(airportsRawData);
function mainController() {
    console.log('main controller!');
}