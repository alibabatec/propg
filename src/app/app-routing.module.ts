import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormatComponent } from "./format/format.component";
import { HomeComponent } from "./trainer/home.component";
import { AddPropertyComponent } from "./property/addproperty.component";
import { ListPropertyComponent } from './property/listproperty.component';
import { PropHomeComponent } from './property/home.component';


const routes: Routes = [
  { path: "format", component: FormatComponent },
  { path: 'trainer/home', component: HomeComponent },
  { path: 'property/add', component: AddPropertyComponent },
  { path: 'property', component: ListPropertyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
