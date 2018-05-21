import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClarityModule } from '@clr/angular';
import { ChartsModule } from 'ng2-charts';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';


@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ChartsModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardNavComponent]
})
export class DashboardModule { }
