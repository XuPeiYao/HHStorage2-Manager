import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorageNavComponent } from './storage-nav/storage-nav.component';

const routes: Routes = [
  {
    path: '',
    component: StorageNavComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/storage-info/storage-info.module#StorageInfoModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageRoutingModule { }
