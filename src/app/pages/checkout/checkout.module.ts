import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { CheckoutRoutingModule, routedComponents } from './checkout-routing.module';
import { CheckoutService } from './checkout.service';
import { ImgFallbackModule } from 'ngx-img-fallback';


@NgModule({
  imports: [
    ThemeModule,
    CheckoutRoutingModule,
    ImgFallbackModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [CheckoutService],

})
export class CheckoutModule { }
