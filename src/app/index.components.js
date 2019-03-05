'use strict';

import footerModule from './components/footer/footer.module';
import headerModule from './components/header/header.module';
import noConnectionModule from './components/noConnection/noConnection.module';

export default angular.module('index.components', [
	footerModule.name,
	headerModule.name,
	noConnectionModule.name
]);
