import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'install', // 安裝
    loadChildren: './install/install.module#InstallModule'
  },
  {
    path: 'auth', // 登入畫面
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'manage', // 管理介面
    loadChildren: './manage/manage.module#ManageModule'
  },
  {
    path: '**', // 重定向至登入畫面
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
