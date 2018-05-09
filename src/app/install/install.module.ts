import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstallRoutingModule } from './install-routing.module';
import { InstallerComponent } from './installer/installer.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    InstallRoutingModule
  ],
  declarations: [InstallerComponent]
})
export class InstallModule { }
