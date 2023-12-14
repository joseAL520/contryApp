import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContriesRouterModule } from './contries-routing.module';

import { ByCapialPageComponent } from './pages/by-capial-page/by-capial-page.component';
import { ByContryPageComponent } from './pages/by-contry-page/by-contry-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ContryPageComponent } from './pages/contry-page/contry-page.component';



@NgModule({
  declarations: [
    ByCapialPageComponent,
    ByContryPageComponent,
    ByRegionPageComponent,
    ContryPageComponent
  ],
  imports: [
    CommonModule,
    ContriesRouterModule
  ]
})
export class CountriesModule { }
