import { AdminComponent } from './admin.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '', component : AdminComponent, children : [
    {path : 'create', component : AddproductComponent}

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
