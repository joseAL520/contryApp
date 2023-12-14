import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContacPagesComponent } from './pages/contac-pages/contac-pages.component';



@NgModule({
  declarations: [
    HomePagesComponent,
    AboutPageComponent,
    SidebarComponent,
    ContacPagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],exports:[
    HomePagesComponent,
    AboutPageComponent,
    SidebarComponent,
    ContacPagesComponent
  ]
})
export class SharedModule { }
