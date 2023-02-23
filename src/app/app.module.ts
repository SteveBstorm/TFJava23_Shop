import { PanierComponent } from './pages/panier/panier.component';
import { AddproductComponent } from './pages/admin/components/addproduct/addproduct.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeComponent } from './core/components/liste/liste.component';
import { DetailComponent } from './core/components/detail/detail.component';
import { HeaderComponent } from './core/components/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { FakeComponent } from './core/components/fake/fake.component';
import { ChildrenComponent } from './core/components/fake/children/children.component';

@NgModule({
  declarations: [
    AppComponent,
    PanierComponent,
    HeaderComponent,
    FakeComponent,
    ChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
