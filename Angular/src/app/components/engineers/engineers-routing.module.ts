import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineersComponent } from './engineers.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: EngineersComponent },
  {path:'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineersRoutingModule { }
