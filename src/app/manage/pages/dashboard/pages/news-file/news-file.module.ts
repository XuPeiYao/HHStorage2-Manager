import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsFileRoutingModule } from './news-file-routing.module';
import { NewsFileListComponent } from './news-file-list/news-file-list.component';

@NgModule({
  imports: [
    CommonModule,
    NewsFileRoutingModule
  ],
  declarations: [NewsFileListComponent]
})
export class NewsFileModule { }
