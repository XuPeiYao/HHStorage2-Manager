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
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'storage',
        loadChildren: './pages/storage/storage.module#StorageModule'
      },
      {
        path: 'users',
        loadChildren: './pages/users/users.module#UsersModule'
      },
      {
        path: 'system',
        loadChildren: './pages/system/system.module#SystemModule'
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
