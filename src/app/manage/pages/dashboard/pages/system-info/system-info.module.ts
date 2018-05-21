import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemInfoRoutingModule } from './system-info-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClarityModule } from '@clr/angular';
import { SystemInfoService } from './services/systemInfo.service';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ChartsModule,
    SystemInfoRoutingModule
  ],
  declarations: [DashboardComponent],
  providers: [SystemInfoService]
})
export class SystemInfoModule { }
