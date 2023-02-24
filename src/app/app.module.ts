import { TokenInterceptor } from './interceptor/token.interceptor';
import { FourofourComponent } from './core/components/fourofour/fourofour.component';
import { FormsModule } from '@angular/forms';
import { PanierComponent } from './pages/panier/panier.component';
import { AddproductComponent } from './pages/admin/components/addproduct/addproduct.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeComponent } from './core/components/liste/liste.component';
import { DetailComponent } from './core/components/detail/detail.component';
import { HeaderComponent } from './core/components/header/header.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeComponent } from './core/components/fake/fake.component';
import { ChildrenComponent } from './core/components/fake/children/children.component';
import { LoginComponent } from './core/components/login/login.component';
import { JeuComponent } from './core/components/fake/jeu/jeu.component';
import { DetailjeuComponent } from './core/components/fake/detailjeu/detailjeu.component';

@NgModule({
  declarations: [
    AppComponent,
    PanierComponent,
    HeaderComponent,
    FakeComponent,
    ChildrenComponent,
    LoginComponent,
    JeuComponent,
    DetailjeuComponent,
    FourofourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
