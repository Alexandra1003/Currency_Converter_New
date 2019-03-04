'use strict';

import ConverterComponent from './main.component';

const mainPageModule = angular.module('main-module', [
  'ui.router'
])
  .config(($stateProvider, $urlRouterProvider, rateServiceProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');
    rateServiceProvider.setURL('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        template: `<div class="header-wrapper">
                    <h3>Welcome to this app!</h3>
                 </div>`
      })
      .state({
        name: 'about',
        url: '/about',
        template: `<div class="header-wrapper">
                    <h3>This page is about us</h3>
                 </div>`
      })
      .state('currConverterState', {
        url: '/currencyConverter',
        component: 'main'/* ,
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
  .component('main', new ConverterComponent());

export default mainPageModule;