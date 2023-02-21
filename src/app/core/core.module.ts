import { DetailComponent } from './components/detail/detail.component';
import { ListeComponent } from './components/liste/liste.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeComponent } from './components/fake/fake.component';



@NgModule({
  declarations: [
    ListeComponent,
    DetailComponent,
    FakeComponent
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
