import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorageInfoComponent } from './storage-info/storage-info.component';

const routes: Routes = [
  {
    path: '',
    component: StorageInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageInfoRoutingModule { }
