"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var order_specs_component_1 = require('./order-specs/order-specs.component');
// import { HeroesComponent } from './heroes.component';
// import { HeroDetailComponent } from './hero-detail.component';
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'options',
        component: order_specs_component_1.OrderSpecsComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map