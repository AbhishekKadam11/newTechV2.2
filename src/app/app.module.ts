/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule  } from '@angular/core';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { CoreModule } from './@core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { UserService } from './pages/login/user.service';
import { HttpClient } from './app.httpclient';
import { HttpClientModule } from '@angular/common/http';

// import { NgxCarouselModule } from 'ngx-carousel';
// import 'hammerjs';
// import { PlusSpinnerModule } from 'plus-spinner';
import { CartService } from './pages/cart/cart.service';
import { GlobalShared } from './app.global';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),

    // PlusSpinnerModule.forRoot(),

  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    UserService,
    CartService,
    {
      provide: HttpClient,
      useFactory: authHttpServiceFactory,
      deps: [XHRBackend, RequestOptions],
    },
    GlobalShared,
  ],
})
export class AppModule {
}

export function authHttpServiceFactory(backend: XHRBackend, options: RequestOptions) {
  return new HttpClient(backend, options);
}

