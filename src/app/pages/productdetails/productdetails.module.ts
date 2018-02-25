import { NgModule } from '@angular/core';
// import { CKEditorModule } from 'ng2-ckeditor';
import { ThemeModule } from '../../@theme/theme.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { ProductRoutingModule, routedComponents } from './productdetails-routing.module';
import { ProductDetailsService } from './productdetails.service';
// import { CartService } from '../cart/cart.service';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

@NgModule({
  imports: [
    ThemeModule,
    ProductRoutingModule,
    NgxCarouselModule,
    // CKEditorModule,
    ImageUploadModule.forRoot(),
    NgxMyDatePickerModule.forRoot(),
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [ProductDetailsService,
              ],

})
export class ProductDetailsModule { }
