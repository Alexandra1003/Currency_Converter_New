'use strict';

import config from './index.config';
import run from './index.run';

import uiRouter from '@uirouter/angularjs';

import coreModule from './core/core.module';
import indexComponents from './index.components';
import indexRoutes from './index.routes';
import converterModule from './pages/converter/converter.module';
import mainModule from './pages/main/main.module';


const App = angular.module(
  "Currency-Converter", [
    // plugins
    uiRouter,
    "ngMessages", 
	"oc.lazyLoad",

    // core
    coreModule.name,

    // components
    indexComponents.name,

    // routes
    indexRoutes.name,

    // pages
    converterModule.name,
    mainModule.name

  ]
);

App
  .config(config)
  .run(run);



export default App;
