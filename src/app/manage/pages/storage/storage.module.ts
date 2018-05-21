import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageRoutingModule } from './storage-routing.module';
import { StorageNavComponent } from './storage-nav/storage-nav.component';

@NgModule({
  imports: [
    CommonModule,
    StorageRoutingModule
  ],
  declarations: [StorageNavComponent]
})
export class StorageModule { }
