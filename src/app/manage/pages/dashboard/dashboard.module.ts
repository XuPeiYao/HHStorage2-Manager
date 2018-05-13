import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './services/dashboard.service';
import { ClarityModule } from '@clr/angular';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ChartsModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
