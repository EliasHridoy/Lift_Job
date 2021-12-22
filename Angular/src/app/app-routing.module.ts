import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {    path: '', component: HomeComponent  },
  { path: 'client', loadChildren: () => import('./components/clients/clients.module').then(m => m.ClientsModule) },
  { path: 'engineer', loadChildren: () => import('./components/engineers/engineers.module').then(m => m.EngineersModule) },
  { path: 'login', component: LoginComponent },
  {path: 'job-details', component: JobDetailsComponent},
  {path: 'job-list', component: JobListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
