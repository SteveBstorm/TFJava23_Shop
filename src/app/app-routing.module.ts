import { FourofourComponent } from './core/components/fourofour/fourofour.component';
import { JeuResolver } from './resolver/jeu.resolver';
import { DetailjeuComponent } from './core/components/fake/detailjeu/detailjeu.component';
import { RoleGuard } from './guards/role.guard';
import { ListeComponent } from './core/components/liste/liste.component';
import { FakeComponent } from './core/components/fake/fake.component';
import { PanierComponent } from './pages/panier/panier.component';
import { ClientModule } from './pages/client/client.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JeuComponent } from './core/components/fake/jeu/jeu.component';

const routes: Routes = [
  {path : '', component : FakeComponent, pathMatch : "full"},
  {path : 'admin',canActivate : [RoleGuard] , loadChildren : () => import('./pages/admin/admin.module').then(m => m.AdminModule)},
  {path : 'client', loadChildren : () => import('./pages/client/client.module').then(m => m.ClientModule)},
  {path : 'panier', component : PanierComponent},
  {path : 'fake', component : FakeComponent, children : [
    {path : 'jeux', component : JeuComponent },
    {path : 'detailjeu/:id', resolve : {currentGame : JeuResolver}, component : DetailjeuComponent}
  ]},
  {path : 'liste', component : ListeComponent},
  {path : '404', component : FourofourComponent},
  {path : '**', redirectTo : '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
