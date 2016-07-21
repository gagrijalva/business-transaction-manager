import { Component } from '@angular/core';
import { OrderSpecService } from '../services/order-spec.service';
import { OrderSpec } from '../models/order-spec';
import { Order } from '../models/order';
import { ConvertToArray } from './order-spec-options.pipe';
import { GroupElementsToArray } from './group-elements-to-array.pipe'; 



@Component({
    selector: 'btm-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css'],
    pipes: [ConvertToArray, GroupElementsToArray]
})

export class DashboardComponent {

    addingOrder: boolean = false;
    active: boolean = true;
    orderSpecs: OrderSpec[];
    model: Order = new Order(-1);

    constructor(private orderSpecService: OrderSpecService) { }

    ngOnInit() {
        this.getOrderSpecs();
    }

    getOrderSpecs() {
        this.orderSpecService.getOrderSpecs().then(orderSpecs => {
            this.orderSpecs = orderSpecs;
            for(let i = 0; i < this.orderSpecs.length; i++) {
                this.model[this.orderSpecs[i].spec] = undefined;
            }
        });
    }

    newOrder() {
        this.addingOrder = !this.addingOrder;
    }
    
    diagnose() {
        return JSON.stringify(this.orderSpecs);
    }

}