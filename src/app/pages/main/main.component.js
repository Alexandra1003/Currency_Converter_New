'use strict';

import ConverterController from './main.controller';
import ConverterTpl from './main.html';

export default class ConverterComponent {
    constructor() {
        this.controller = ConverterController;
        this.templateUrl = ConverterTpl;
    }
}