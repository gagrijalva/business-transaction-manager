import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderSpecService } from './services/order-spec.service';

@Component({
    selector: 'my-app', 
    template: `
                <h1>{{title}}</h1>
                <nav>
                    <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
                    <a [routerLink]="['/options']" routerLinkActive="active">Options</a>
                </nav>
                <router-outlet></router-outlet>  
              `
    , 
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES], 
    providers: [OrderSpecService]
})

export class AppComponent {
    title = 'Almond & Vanilla';
}
