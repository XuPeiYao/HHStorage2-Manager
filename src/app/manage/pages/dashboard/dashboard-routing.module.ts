import { HealthResolve } from './resolves/HealthResolve';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriveResolve } from './resolves/DriveResolve';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      driveInfo: DriveResolve,
      healthInfo: HealthResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DriveResolve, HealthResolve]
})
export class DashboardRoutingModule { }
