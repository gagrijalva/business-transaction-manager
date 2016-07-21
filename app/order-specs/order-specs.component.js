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
var order_spec_1 = require('../models/order-spec');
var order_spec_service_1 = require('../services/order-spec.service');
var order_spec_form_component_1 = require('./order-spec-form/order-spec-form.component');
var OrderSpecsComponent = (function () {
    function OrderSpecsComponent(orderSpecService) {
        this.orderSpecService = orderSpecService;
        this.addingParameter = false;
        this.active = true;
        this.optionsRequired = false;
        this.inputTypes = ["Texto", "Selector", "Opciones", "Area de Texto"];
    }
    OrderSpecsComponent.prototype.ngOnInit = function () {
        this.getOrderSpecs();
        this.model = new order_spec_1.OrderSpec(null, '', 0, '');
    };
    OrderSpecsComponent.prototype.getOrderSpecs = function () {
        var _this = this;
        this.orderSpecService.getOrderSpecs().then(function (orderSpecs) {
            return _this.orderSpecs = orderSpecs;
        });
    };
    OrderSpecsComponent.prototype.newParameter = function () {
        this.addingParameter = !this.addingParameter;
    };
    OrderSpecsComponent.prototype.onChange = function (input) {
        switch (input) {
            case "0":
                this.optionsRequired = false;
                break;
            case "1":
                this.optionsRequired = true;
                break;
            case "2":
                this.optionsRequired = true;
                break;
            case "3":
                this.optionsRequired = false;
                break;
        }
    };
    OrderSpecsComponent.prototype.onEdit = function (orderSpec) {
        this.editOrderSpec = orderSpec;
    };
    OrderSpecsComponent.prototype.closeForm = function (orderSpec) {
        var _this = this;
        this.editOrderSpec = orderSpec;
        setTimeout(function () { return _this.editOrderSpec = null; }, 0);
    };
    OrderSpecsComponent.prototype.deleteOrderSpec = function (orderSpec, event) {
        var _this = this;
        event.stopPropagation();
        this.orderSpecService
            .delete(orderSpec)
            .then(function (res) {
            _this.orderSpecs = _this.orderSpecs.filter(function (h) { return h !== orderSpec; });
        })
            .catch(function (error) { return _this.error = error; });
    };
    OrderSpecsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.orderSpecService
            .post(this.model)
            .catch(function (error) { return _this.error = error; });
        this.getOrderSpecs();
        this.addingParameter = false;
        this.model = new order_spec_1.OrderSpec(0, '', 0, '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    OrderSpecsComponent = __decorate([
        core_1.Component({
            selector: 'btm-order-specs',
            templateUrl: 'app/order-specs/order-specs.component.html',
            styleUrls: ['app/order-specs/order-specs.component.css'],
            directives: [order_spec_form_component_1.OrderSpecForm]
        }), 
        __metadata('design:paramtypes', [order_spec_service_1.OrderSpecService])
    ], OrderSpecsComponent);
    return OrderSpecsComponent;
}());
exports.OrderSpecsComponent = OrderSpecsComponent;
//# sourceMappingURL=order-specs.component.js.map