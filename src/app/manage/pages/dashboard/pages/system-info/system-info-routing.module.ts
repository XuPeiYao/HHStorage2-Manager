import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HealthResolve } from './resolves/HealthResolve';
import { DriveResolve } from './resolves/DriveResolve';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      healthInfo: HealthResolve,
      driveInfo: DriveResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HealthResolve, DriveResolve]
})
export class SystemInfoRoutingModule { }
