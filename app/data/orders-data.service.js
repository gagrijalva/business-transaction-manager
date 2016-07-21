"use strict";
var OrdersDataService = (function () {
    function OrdersDataService() {
    }
    OrdersDataService.prototype.createDb = function () {
        var orders = [
            { id: 11, name: 'Mr. Nice' }
        ];
        return { orders: orders };
    };
    return OrdersDataService;
}());
exports.OrdersDataService = OrdersDataService;
//# sourceMappingURL=orders-data.service.js.map