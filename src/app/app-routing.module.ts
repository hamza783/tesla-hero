import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import { CarsComponent } from './cars/cars.component';
import { RegisterComponent } from './register/register.component';
import {HomeComponent} from './home/home.component';

const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }