import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { CheckoutRoutingModule, routedComponents } from './checkout-routing.module';
import { CheckoutService } from './checkout.service';



@NgModule({
  imports: [
    ThemeModule,
    CheckoutRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [CheckoutService],

})
export class CheckoutModule { }
