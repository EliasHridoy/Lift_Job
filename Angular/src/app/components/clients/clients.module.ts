import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';


import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { JobFormComponent } from './job-form/job-form.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobListComponent } from './job-list/job-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    ClientsComponent,
    JobFormComponent,
    JobDetailsComponent,
    JobListComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,FormsModule
  ]
})
export class ClientsModule { }
