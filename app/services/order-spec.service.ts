import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { OrderSpec } from '../models/order-spec';

@Injectable()
export class OrderSpecService {
    private orderSpecUrl = 'app/specs';

    constructor(private http: Http) { }

    getOrderSpecs(): Promise<OrderSpec[]> {
        return this.http.get(this.orderSpecUrl)
                   .toPromise()
                   .then(response => response.json().data)
                   .catch(this.handleError);
    }

    getHero(id: number) {
        return this.getOrderSpecs().then(
            orderSpecs => orderSpecs.find(orderSpec => orderSpec.id === id)
        );
    }

    public post(orderSpec: OrderSpec) {
        let headers = new Headers();
        return this.http.post(this.orderSpecUrl, 
                    JSON.stringify(orderSpec), {headers: headers})
                   .toPromise()
                   .then(response => response.json().data)
                   .catch(this.handleError);
    }

    delete(orderSpec: OrderSpec) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.orderSpecUrl}/${orderSpec.id}`;

        return this.http
                   .delete(url, headers)
                   .toPromise()
                   .catch(this.handleError);
    }
    
    public put(orderSpec: OrderSpec) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        let url = `${this.orderSpecUrl}/${orderSpec.id}`;

        return this.http
                   .put(url, JSON.stringify(orderSpec), {headers: headers})
                   .toPromise()
                   .then(() => orderSpec)
                   .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}