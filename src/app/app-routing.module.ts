import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error.component';
import { ReactiveCustomValidatorComponent } from './reactive/reactive-custom-validator/reactive-custom-validator.component';
import { ReactiveSetNPatchValueComponent } from './reactive/reactive-set-npatch-value/reactive-set-npatch-value.component';
import { ReactiveStatuschangeComponent } from './reactive/reactive-statuschange/reactive-statuschange.component';
import { ReactiveValidatorsComponent } from './reactive/reactive-validators/reactive-validators.component';
import { ReactiveValuechangeComponent } from './reactive/reactive-valuechange/reactive-valuechange.component';
import { CanDeactivateComponent } from './samples/can-deactivate/can-deactivate.component';
import { ExceljsExportComponent } from './samples/exceljs-export/exceljs-export.component';
import { HttpClientComponent } from './samples/http-client/http-client.component';
import { HttpHeadersComponent } from './samples/http-headers/http-headers.component';
import { HttpInterceptorComponent } from './samples/http-interceptor/http-interceptor.component';
import { ObservablesComponent } from './samples/observables/observables.component';
import { ProductDetailComponent } from './samples/pass-route-params/product-detail.component';
import { ProductComponent } from './samples/pass-route-params/product.component';
import { TemplateCustomValidatorComponent } from './template/template-custom-validator/template-custom-validator.component';
import { TemplateSetNPatchValueComponent } from './template/template-set-npatch-value/template-set-npatch-value.component';
import { TemplateStatuschangeComponent } from './template/template-statuschange/template-statuschange.component';
import { TemplateValidatorsComponent } from './template/template-validators/template-validators.component';
import { TemplateValuechangeComponent } from './template/template-valuechange/template-valuechange.component';
import { GlobalerrorComponent } from './samples/globalerror/globalerror.component';
import { GlobalHttperrorComponent }
  from './samples/global-httperror/global-httperror.component';

const routes: Routes = [
  { path: 'reactive', component: ReactiveSetNPatchValueComponent },
  { path: 'template', component: TemplateSetNPatchValueComponent },
  { path: 'reactivestatuschange', component: ReactiveStatuschangeComponent },
  { path: 'templatestatuschange', component: TemplateStatuschangeComponent },
  { path: 'reactivevaluechange', component: ReactiveValuechangeComponent },
  { path: 'templatevaluechange', component: TemplateValuechangeComponent },
  { path: 'reactivevalidators', component: ReactiveValidatorsComponent },
  { path: 'templatevalidators', component: TemplateValidatorsComponent },
  { path: 'reactivecustomvalidators', component: ReactiveCustomValidatorComponent },
  { path: 'templatecustomvalidators', component: TemplateCustomValidatorComponent },
  { path: 'excelexport', component: ExceljsExportComponent },
  { path: 'candeactivate', component: CanDeactivateComponent },
  { path: 'httpclient', component: HttpClientComponent },
  { path: 'httpheaders', component: HttpHeadersComponent },
  { path: 'httpinterceptor', component: HttpInterceptorComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'globalerror', component: GlobalerrorComponent },
  { path: 'globalhttp', component: GlobalHttperrorComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
