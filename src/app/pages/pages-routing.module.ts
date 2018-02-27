import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'ui-features',
      loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
    }, {
      path: 'components',
      loadChildren: './components/components.module#ComponentsModule',
    }, {
      path: 'maps',
      loadChildren: './maps/maps.module#MapsModule',
    },  {
      path: 'forms',
      loadChildren: './forms/forms.module#FormsModule',
    }, {
      path: 'tables',
      loadChildren: './tables/tables.module#TablesModule',
    }, {
      path: 'profile',
      loadChildren: 'app/pages/profile/profile.module#ProfileModule',
    }, {
      path: 'product',
      loadChildren: './product/product.module#ProductModule',
    }, {
      path: 'productdetails/:productId',
      loadChildren: './productdetails/productdetails.module#ProductDetailsModule',
    }, {
      path: 'productlist/:productType',
      loadChildren: './productlist/productlist.module#ProductlistModule',
    }, {
      path: 'checkout',
      loadChildren: './checkout/checkout.module#CheckoutModule',
    }, {
      path: 'searchresult/:searchkey',
      loadChildren: './searchresult/searchresult.module#SearchresultModule',
    }, {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
