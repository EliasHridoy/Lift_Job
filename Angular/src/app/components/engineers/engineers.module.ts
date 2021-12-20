import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineersRoutingModule } from './engineers-routing.module';
import { EngineersComponent } from './engineers.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    EngineersComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    EngineersRoutingModule
  ]
})
export class EngineersModule { }
