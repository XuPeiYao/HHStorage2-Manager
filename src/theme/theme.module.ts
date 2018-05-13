import { BaseHttpClient } from './BaseHttpClient';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HyperHttpClient } from './HyperHttpClient';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    BaseHttpClient,
    HyperHttpClient
  ]
})
export class ThemeModule { }
