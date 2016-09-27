import { hello } from './app/app';
import { siema } from './app/app';

import angular from 'angular';
import { appCtrl } from './app/app.controller';
import { appService } from './app/app.service';
import { productDirective } from './app/app.directive';
import { productDescription } from './app/product-description.directive';


angular.module('app', [])
    .service('appService', appService)
    .controller('appCtrl', ['appService', appCtrl])
    .directive('productDirective', productDirective)
    .directive('productDescription', productDescription);
