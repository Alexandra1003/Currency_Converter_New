'use strict';

export default function (app) {
    app
        .constant('ROUTE_ERRORS', {
            auth: 'Authorization has been denied.',
        })
        .constant('CommissionList', [0, 1, 2, 5, 10])
        .constant('UAHconstant', { ccy: 'UAH', base_ccy: 'UAH', buy: 1, sale: 1 });
}
