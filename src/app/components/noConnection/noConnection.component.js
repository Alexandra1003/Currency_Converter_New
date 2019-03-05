'use strict';

import noConnectionTpl from './noConnection.html';
import noConnectionController from './noConnection.controller';

export default class noConnectionComponent {
    constructor() {
        this.templateUrl = noConnectionTpl;
        this.controller = noConnectionController;
    }
}