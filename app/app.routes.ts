import { provideRouter, RouterConfig }  from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderSpecsComponent } from './order-specs/order-specs.component';

// import { HeroesComponent } from './heroes.component';
// import { HeroDetailComponent } from './hero-detail.component';

const routes: RouterConfig = [
  {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'options',
    component: OrderSpecsComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
