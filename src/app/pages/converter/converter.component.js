'use strict';

import ConverterController from './converter.controller';
import ConverterTpl from './converter.html';

export default class ConverterComponent {
    constructor() {
        this.controller = ConverterController;
        this.templateUrl = ConverterTpl;
        
    this.bindings = { currencyList: '<' };
    }
}