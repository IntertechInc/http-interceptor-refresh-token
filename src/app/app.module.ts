import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestService } from "./test.service";
import { AuthService } from './auth.service';
import { RequestInterceptorService } from './request-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true },
    TestService,
    AuthService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
