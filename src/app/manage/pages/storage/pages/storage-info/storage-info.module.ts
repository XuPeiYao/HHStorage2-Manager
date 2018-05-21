import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageInfoRoutingModule } from './storage-info-routing.module';
import { StorageInfoComponent } from './storage-info/storage-info.component';

@NgModule({
  imports: [
    CommonModule,
    StorageInfoRoutingModule
  ],
  declarations: [StorageInfoComponent]
})
export class StorageInfoModule { }
