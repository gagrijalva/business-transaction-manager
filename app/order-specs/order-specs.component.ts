import { Component, OnInit } from '@angular/core';
import { OrderSpec } from '../models/order-spec';
import { OrderSpecService } from '../services/order-spec.service';
import { NgForm }    from '@angular/forms';
import { InputType } from '../shared/input-type'
import { OrderSpecForm } from './order-spec-form/order-spec-form.component';

@Component({
    selector: 'btm-order-specs',
    templateUrl: 'app/order-specs/order-specs.component.html',
    styleUrls: ['app/order-specs/order-specs.component.css'],
    directives: [OrderSpecForm]
})
export class OrderSpecsComponent {

    orderSpecs: OrderSpec[];
    addingParameter = false;
    model : OrderSpec;
    active = true;
    error: any;
    optionsRequired = false;
    inputTypes = ["Texto", "Selector", "Opciones", "Area de Texto"];
    editOrderSpec: OrderSpec;


    constructor(private orderSpecService: OrderSpecService) { }

    ngOnInit() {
        this.getOrderSpecs();
        this.model = new OrderSpec(null, '', 0, '');
    }

    getOrderSpecs() {
        this.orderSpecService.getOrderSpecs().then(orderSpecs => 
            this.orderSpecs = orderSpecs
        );
    }

    newParameter() {
        this.addingParameter = !this.addingParameter;
    }  

    onChange(input:string) {
        switch(input) {
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
    }

    onEdit(orderSpec: OrderSpec) {

        this.editOrderSpec = orderSpec;
        
    }

    closeForm(orderSpec: OrderSpec) {
        this.editOrderSpec = orderSpec;
        setTimeout(() => this.editOrderSpec = null, 0);
    }

    deleteOrderSpec(orderSpec: OrderSpec, event: any) {
        event.stopPropagation();
        this.orderSpecService
            .delete(orderSpec)
            .then(res => {
                this.orderSpecs = this.orderSpecs.filter(h => h !== orderSpec);
            })
            .catch(error => this.error = error);
    }

    onSubmit() {
        this.orderSpecService
            .post(this.model)
            .catch(error => this.error = error);

        this.getOrderSpecs();

        this.addingParameter = false;
        this.model = new OrderSpec(0, '', 0, '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    // get diagnostic () {
    //     return JSON.stringify(this.model);
    // } 

    // trackByOrders(index: number, OrderSpec: OrderSpec) {
    //     return orderParam.id;
    // }
}