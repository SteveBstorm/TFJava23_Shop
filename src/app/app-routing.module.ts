import { ListeComponent } from './core/components/liste/liste.component';
import { FakeComponent } from './core/components/fake/fake.component';
import { PanierComponent } from './pages/panier/panier.component';
import { ClientModule } from './pages/client/client.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'admin', loadChildren : () => import('./pages/admin/admin.module').then(m => m.AdminModule)},
  {path : 'client', loadChildren : () => import('./pages/client/client.module').then(m => m.ClientModule)},
  {path : 'panier', component : PanierComponent},
  {path : 'fake', component : FakeComponent},
  {path : 'liste', component : ListeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
