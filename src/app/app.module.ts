import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HighlightDirective } from './highlight.directive';
import { MultiplierPipe } from './multiplier.pipe'
import { CommonService } from './common.service';
import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { NavbarComponent } from './common-comp/navbar/navbar.component';
import { Component1Component } from './parent-component/component1/component1.component';
import { Component2Component } from './parent-component/component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { ServiceComponent } from './service/service.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiplierPipe,
    ServiceComponent,
    ClientComponent,
    ContactComponent,
    NavbarComponent,
    HighlightDirective,
    Component1Component,
    Component2Component,
    Component3Component,
    ParentComponentComponent,
    SettingComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
