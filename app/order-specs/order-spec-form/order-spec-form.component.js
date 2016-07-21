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
var order_spec_1 = require('../../models/order-spec');
var order_spec_service_1 = require('../../services/order-spec.service');
var OrderSpecForm = (function () {
    function OrderSpecForm(orderSpecService) {
        this.orderSpecService = orderSpecService;
        this.finishedUpdate = new core_1.EventEmitter();
        this.inputTypes = ["Texto", "Selector", "Opciones", "Area de Texto"];
    }
    OrderSpecForm.prototype.ngOnInit = function () {
        this.onChange(this.orderSpec.inputType.toString());
    };
    OrderSpecForm.prototype.onChange = function (input) {
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
            case "4":
                this.optionsRequired = true;
                break;
        }
    };
    OrderSpecForm.prototype.onSubmit = function () {
        var _this = this;
        if (!this.optionsRequired) {
            this.orderSpec.options = "";
        }
        this.orderSpec.inputType = +this.orderSpec.inputType;
        this.orderSpecService
            .put(this.orderSpec)
            .then(function (res) {
            _this.finishedUpdate.emit(_this.orderSpec);
        })
            .catch(function (error) { return _this.error = error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', order_spec_1.OrderSpec)
    ], OrderSpecForm.prototype, "orderSpec", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], OrderSpecForm.prototype, "finishedUpdate", void 0);
    OrderSpecForm = __decorate([
        core_1.Component({
            selector: 'btm-order-spec-form',
            templateUrl: 'app/order-specs/order-spec-form/order-spec-form.component.html',
            styleUrls: ['app/order-specs/order-spec-form/order-spec-form.component.css']
        }), 
        __metadata('design:paramtypes', [order_spec_service_1.OrderSpecService])
    ], OrderSpecForm);
    return OrderSpecForm;
}());
exports.OrderSpecForm = OrderSpecForm;
//# sourceMappingURL=order-spec-form.component.js.map