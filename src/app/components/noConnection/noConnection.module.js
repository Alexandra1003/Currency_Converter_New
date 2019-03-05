'use strict';

import noConnectionComponent from './noConnection.component';
import './noConnection.scss';

const noConnectionModule = angular.module('no-connection-module', []);

noConnectionModule
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
    .component('noConnection', new noConnectionComponent());

export default noConnectionModule;
