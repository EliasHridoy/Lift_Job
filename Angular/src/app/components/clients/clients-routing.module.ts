import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobFormComponent } from './job-form/job-form.component';
import { JobListComponent } from './job-list/job-list.component';

const routes: Routes = [
  {path: '', component: ClientsComponent },
  {path: 'job-details', component: JobDetailsComponent},
  {path: 'job-post', component: JobFormComponent},
  {path: 'job-list', component: JobListComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
