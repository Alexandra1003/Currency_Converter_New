'use strict';

import ConverterComponent from './converter.component';

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
        component: 'converter'/* ,
        resolve: {
          currencyList: rateService => {
            return rateService.getRateList();
          }
        } */
      })
  })
  .run(($rootScope, $window) => {
    'ngInject';
    $rootScope.connectionStatus = navigator.onLine;

    $window.addEventListener('offline', function () {
      $rootScope.$applyAsync(function () {
        $rootScope.connectionStatus = false;
      });
    });

    $window.addEventListener('online', function () {
      $rootScope.$applyAsync(function () {
        $rootScope.connectionStatus = true;
      });
    });
  })
  .component('converter', new ConverterComponent());

export default converterPageModule;