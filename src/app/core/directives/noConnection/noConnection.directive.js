'use strict';

export default function (app) {

  app.directive('noConnection', function () {
    return {
      template: '<div class="connection-message" ng-hide="connectionStatus">No connection ...</div>',
      restrict: 'E'
    };
  });
}