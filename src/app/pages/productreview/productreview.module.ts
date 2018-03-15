import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ProductreviewRoutingModule, routedComponents } from './productreview-routing.module';
import { ProductreviewService } from './productreview.service';
// import { SidebarComponent } from '../sidebar/sidebar.component';


@NgModule({
  imports: [
    ThemeModule,
    ProductreviewRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [ProductreviewService],

})
export class ProductreviewModule { }
