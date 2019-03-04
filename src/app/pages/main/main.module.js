'use strict';

import MainComponent from './main.component';

const mainPageModule = angular.module('main-module', [
  'ui.router'
])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state({
        name: 'main',
        url: '/main',
        component: 'main'
      })
  })
  .component('main', new MainComponent());

export default mainPageModule;