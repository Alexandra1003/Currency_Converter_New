'use strict';

import ConverterComponent from './converter.component';
import ConverterController from './converter.controller';
import ConverterTpl from './converter.html';

const converterPageModule = angular.module('converter-module', [
  'ui.router'
])
  .config(($stateProvider, $urlRouterProvider, rateServiceProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');
    rateServiceProvider.setURL('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');

    $stateProvider
      .state('currConverterState', {
        url: '/currencyConverter',
        controller: ConverterController,
        templateUrl: ConverterTpl,
        resolve: {
          currencyList: rateService => {
            return rateService.getRateList();
          }
        }
      })
  })
  .component('converter', new ConverterComponent());

export default converterPageModule;