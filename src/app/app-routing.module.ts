import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import { CarsComponent } from './cars/cars.component';
import { RegisterComponent } from './register/register.component';

const routes : Routes = [
  {path: 'cars', component: CarsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }