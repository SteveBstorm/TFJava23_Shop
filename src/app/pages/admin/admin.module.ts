import { AdminRoutingModule } from './admin-routing.module';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddproductComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
