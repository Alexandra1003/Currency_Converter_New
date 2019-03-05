'use strict';

const shared = angular.module('core.shared', []);

import validationTestDirective from './directives/validation-test/validation-test.directive';

import currencyFilter from './filters/currencyFilter';

import constants from './services/constants';
import storeFactory from './services/store.provider';
import resolverProvider from './services/resolver.provider';

validationTestDirective(shared);

currencyFilter(shared);

constants(shared);
storeFactory(shared);
resolverProvider(shared);

export default shared;
