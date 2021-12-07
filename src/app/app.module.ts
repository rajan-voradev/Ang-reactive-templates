import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error.component';
import { ReactiveSetNPatchValueComponent } from './reactive/reactive-set-npatch-value/reactive-set-npatch-value.component';
import { TemplateSetNPatchValueComponent } from './template/template-set-npatch-value/template-set-npatch-value.component';
import { ReactiveStatuschangeComponent } from './reactive/reactive-statuschange/reactive-statuschange.component';
import { TemplateStatuschangeComponent } from './template/template-statuschange/template-statuschange.component';
import { ReactiveValuechangeComponent } from './reactive/reactive-valuechange/reactive-valuechange.component';
import { TemplateValuechangeComponent } from './template/template-valuechange/template-valuechange.component';
import { ReactiveValidatorsComponent } from './reactive/reactive-validators/reactive-validators.component';
import { ReactiveCustomValidatorComponent } from './reactive/reactive-custom-validator/reactive-custom-validator.component';
import { TemplateValidatorsComponent } from './template/template-validators/template-validators.component';
import { TemplateCustomValidatorComponent } from './template/template-custom-validator/template-custom-validator.component';
import { HttpClientComponent } from './samples/http-client/http-client.component';
import { HttpInterceptorComponent } from './samples/http-interceptor/http-interceptor.component';
import { ProductComponent } from './samples/pass-route-params/product.component';
import { ProductDetailComponent } from './samples/pass-route-params/product-detail.component';
import { ObservablesComponent } from './samples/observables/observables.component';
import { HttpHeadersComponent } from './samples/http-headers/http-headers.component';
import { ProductService } from './samples/pass-route-params/product.service';
import { CanDeactivateComponent } from './samples/can-deactivate/can-deactivate.component';
import { ExceljsExportComponent } from './samples/exceljs-export/exceljs-export.component';
import { GlobalerrorComponent } from './samples/globalerror/globalerror.component';
import { GlobalErrorHandlerService } from './globalerror.service';
import { GlobalHttperrorComponent } from './samples/global-httperror/global-httperror.component';
import { GlobalHttpInterceptorService } from './global.httperror.service';
import { GitHubService } from './samples/http-headers/github.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ReactiveSetNPatchValueComponent,
    TemplateSetNPatchValueComponent,
    ReactiveStatuschangeComponent,
    TemplateStatuschangeComponent,
    ReactiveValuechangeComponent,
    TemplateValuechangeComponent,
    ReactiveValidatorsComponent,
    ReactiveCustomValidatorComponent,
    TemplateValidatorsComponent,
    TemplateCustomValidatorComponent,
    HttpClientComponent,
    HttpInterceptorComponent,
    ProductComponent,
    ProductDetailComponent,
    ObservablesComponent,
    HttpHeadersComponent,
    CanDeactivateComponent,
    ExceljsExportComponent,
    GlobalerrorComponent,
    GlobalHttperrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptorService,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
    {
      provide: GitHubService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
