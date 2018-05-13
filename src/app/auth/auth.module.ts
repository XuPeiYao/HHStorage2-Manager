import { InstallerComponent } from './installer/installer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarityModule } from '@clr/angular';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoadingModule,
    ReactiveFormsModule,
    ClarityModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, InstallerComponent]
})
export class AuthModule { }
