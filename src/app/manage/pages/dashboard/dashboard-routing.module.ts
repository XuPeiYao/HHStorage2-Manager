import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardNavComponent,
    children: [
      {
        path: 'system-info',
        loadChildren: './pages/system-info/system-info.module#SystemInfoModule'
      },
      {
        path: 'news-file',
        loadChildren: './pages/news-file/news-file.module#NewsFileModule'
      },
      {
        path: '**',
        redirectTo: 'system-info'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule { }
