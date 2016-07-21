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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var OrderSpecService = (function () {
    function OrderSpecService(http) {
        this.http = http;
        this.orderSpecUrl = 'app/specs';
    }
    OrderSpecService.prototype.getOrderSpecs = function () {
        return this.http.get(this.orderSpecUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    OrderSpecService.prototype.getHero = function (id) {
        return this.getOrderSpecs().then(function (orderSpecs) { return orderSpecs.find(function (orderSpec) { return orderSpec.id === id; }); });
    };
    OrderSpecService.prototype.post = function (orderSpec) {
        var headers = new http_1.Headers();
        return this.http.post(this.orderSpecUrl, JSON.stringify(orderSpec), { headers: headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    OrderSpecService.prototype.delete = function (orderSpec) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.orderSpecUrl + "/" + orderSpec.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    OrderSpecService.prototype.put = function (orderSpec) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.orderSpecUrl + "/" + orderSpec.id;
        return this.http
            .put(url, JSON.stringify(orderSpec), { headers: headers })
            .toPromise()
            .then(function () { return orderSpec; })
            .catch(this.handleError);
    };
    OrderSpecService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    OrderSpecService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OrderSpecService);
    return OrderSpecService;
}());
exports.OrderSpecService = OrderSpecService;
//# sourceMappingURL=order-spec.service.js.map