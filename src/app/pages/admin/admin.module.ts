import { AdminRoutingModule } from './admin-routing.module';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [
    AddproductComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule
  ]
})
export class AdminModule { }
