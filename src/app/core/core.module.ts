import { DetailComponent } from './components/detail/detail.component';
import { ListeComponent } from './components/liste/liste.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeComponent } from './components/fake/fake.component';
import { ChildrenComponent } from './components/fake/children/children.component';




@NgModule({
  declarations: [
    ListeComponent,
    DetailComponent,
    FakeComponent,
    ChildrenComponent

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
