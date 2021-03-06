import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ClarityModule } from '@clr/angular';
import { ManagerComponent } from './manager/manager.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ManageRoutingModule
  ],
  declarations: [ManagerComponent, DashboardComponent]
})
export class ManageModule { }
