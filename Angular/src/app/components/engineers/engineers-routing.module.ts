import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailsComponent } from '../job-details/job-details.component';
import { JobListComponent } from '../job-list/job-list.component';
import { EngineersComponent } from './engineers.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: EngineersComponent },
  {path:'profile', component: ProfileComponent},
  {path: 'job-details', component: JobDetailsComponent},
  {path: 'job-list', component: JobListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineersRoutingModule { }
