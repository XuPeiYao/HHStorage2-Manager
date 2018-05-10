import { InstallerComponent } from './installer/installer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarityModule } from '@clr/angular';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, InstallerComponent]
})
export class AuthModule { }
