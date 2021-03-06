import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  {
    path: '', // 儀錶板
    component: ManagerComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
