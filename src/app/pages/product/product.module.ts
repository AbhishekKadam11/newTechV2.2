import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { ThemeModule } from '../../@theme/theme.module';
import { ImageUploadModule } from 'angular2-image-upload';
import { ProductRoutingModule, routedComponents } from './product-routing.module';
import { ProductService } from './product.service';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { NgSimpleSelectModule } from 'ng5-simple-select';

@NgModule({
  imports: [
    ThemeModule,
    ProductRoutingModule,
    ImageUploadModule.forRoot(),
    NgxMyDatePickerModule.forRoot(),
    CKEditorModule,
    NgSimpleSelectModule,

  ],
  declarations: [
    ...routedComponents,

  ],
  providers: [ProductService],

})
export class ProductModule { }
