"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var order_spec_service_1 = require('../services/order-spec.service');
var order_1 = require('../models/order');
var order_spec_options_pipe_1 = require('./order-spec-options.pipe');
var group_elements_to_array_pipe_1 = require('./group-elements-to-array.pipe');
var DashboardComponent = (function () {
    function DashboardComponent(orderSpecService) {
        this.orderSpecService = orderSpecService;
        this.addingOrder = false;
        this.active = true;
        this.model = new order_1.Order(-1);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getOrderSpecs();
    };
    DashboardComponent.prototype.getOrderSpecs = function () {
        var _this = this;
        this.orderSpecService.getOrderSpecs().then(function (orderSpecs) {
            _this.orderSpecs = orderSpecs;
            for (var i = 0; i < _this.orderSpecs.length; i++) {
                _this.model[_this.orderSpecs[i].spec] = undefined;
            }
        });
    };
    DashboardComponent.prototype.newOrder = function () {
        this.addingOrder = !this.addingOrder;
    };
    DashboardComponent.prototype.diagnose = function () {
        return JSON.stringify(this.orderSpecs);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'btm-dashboard',
            templateUrl: 'app/dashboard/dashboard.component.html',
            styleUrls: ['app/dashboard/dashboard.component.css'],
            pipes: [order_spec_options_pipe_1.ConvertToArray, group_elements_to_array_pipe_1.GroupElementsToArray]
        }), 
        __metadata('design:paramtypes', [order_spec_service_1.OrderSpecService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map