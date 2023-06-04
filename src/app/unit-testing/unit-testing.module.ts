import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'component-test',
    component:AlertButtonComponent
  }

]

@NgModule({
  declarations: [
    HomeComponent,
    AlertButtonComponent,


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule

  ]
})
export class UnitTestingModule { }
