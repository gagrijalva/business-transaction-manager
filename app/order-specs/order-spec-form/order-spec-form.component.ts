import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { OrderSpec } from '../../models/order-spec';
import { OrderSpecService } from '../../services/order-spec.service';

@Component({
    selector: 'btm-order-spec-form',
    templateUrl: 'app/order-specs/order-spec-form/order-spec-form.component.html',
    styleUrls: ['app/order-specs/order-spec-form/order-spec-form.component.css']
})

export class OrderSpecForm {

    @Input() orderSpec: OrderSpec;
    @Output() finishedUpdate = new EventEmitter();
    error: any;

    constructor(private orderSpecService: OrderSpecService) { }
    

    inputTypes = ["Texto", "Selector", "Opciones", "Area de Texto"];
    optionsRequired: boolean;

    ngOnInit() {
        this.onChange(this.orderSpec.inputType.toString());
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
            case "4":
                this.optionsRequired = true;
            break;
        }
    }

    onSubmit() {

        if(!this.optionsRequired) {
            this.orderSpec.options = "";
        }

        this.orderSpec.inputType = +this.orderSpec.inputType; 

        this.orderSpecService
            .put(this.orderSpec)
            .then(res => {
                this.finishedUpdate.emit(this.orderSpec);
            })
            .catch(error => this.error = error);
    }
}