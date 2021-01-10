import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormatComponent } from './format/format.component';
import {HomeComponent} from "./trainer/home.component";
import {AddPropertyComponent} from "./property/addproperty.component";
import { ListPropertyComponent } from './property/listproperty.component';
import {PropHomeComponent} from './property/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FormatComponent,
    HomeComponent, 
    AddPropertyComponent,
    ListPropertyComponent,
    PropHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
