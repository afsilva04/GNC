import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MaterialComponentsModule } from '../material-components.module';
import { RoutingModule } from '../app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { QuillModule } from 'ngx-quill';
import { HighlightModule } from '../core/highlightjs/highlight.module';
import { SortablejsModule, SortablejsOptions } from 'angular-sortablejs';
import { CalendarModule } from 'angular-calendar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { environment } from "../../environments/environment";
import { TextMaskModule } from 'angular2-text-mask';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// Componets
import { LoginComponent } from './login/login.component';
import { RegisterComponent, DialogTerms } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NegotiationComponent } from './negotiation/negotiation.component';
import { ExpansionPanelsModule } from 'ng2-expansion-panels';
import { InformationComponent } from './negotiation/information/information.component';
import { ProductsComponent } from './negotiation/products/products.component';
import { ExistingnegotiationsComponent } from './existingnegotiations/existingnegotiations.component';
// Providers
import { UserService } from "./services/user/user.service";
import { LocalStorageService } from "angular2-localstorage";
import { RouteGuard } from './services/routing/route-guard.service';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApi
    }),
    QuillModule,
    HighlightModule,
    SortablejsModule,
    CalendarModule.forRoot(),
    PerfectScrollbarModule.forChild(),
    ExpansionPanelsModule,
    TextMaskModule,
    NgxDatatableModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    DialogTerms,
    NegotiationComponent,
    InformationComponent,
    ProductsComponent,
    ExistingnegotiationsComponent
  ],
  entryComponents: [
    DialogTerms
  ],
  providers: [
    UserService,
    LocalStorageService,
    RouteGuard
  ]
})
export class ClaroModule { }