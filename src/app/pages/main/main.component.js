'use strict';

import MainController from './main.controller';
import MainTpl from './main.html';

export default class MainComponent {
    constructor() {
        this.controller = MainController;
        this.templateUrl = MainTpl;
    }
}