import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsFileListComponent } from './news-file-list/news-file-list.component';

const routes: Routes = [
  {
    path: '',
    component: NewsFileListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsFileRoutingModule { }
