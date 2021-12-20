import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {    path: '', component: HomeComponent  },
  { path: 'clients', loadChildren: () => import('./components/clients/clients.module').then(m => m.ClientsModule) },
  { path: 'engineers', loadChildren: () => import('./components/engineers/engineers.module').then(m => m.EngineersModule) },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
