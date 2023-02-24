import { DetailComponent } from './components/detail/detail.component';
import { ListeComponent } from './components/liste/liste.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourofourComponent } from './components/fourofour/fourofour.component';




@NgModule({
  declarations: [
    ListeComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ListeComponent,
    DetailComponent
  ]
})
export class CoreModule { }
