import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InstallStatusResolve } from './resolves/InstallStatusResolve';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    resolve: {
      installed: InstallStatusResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [InstallStatusResolve]
})
export class AuthRoutingModule { }
