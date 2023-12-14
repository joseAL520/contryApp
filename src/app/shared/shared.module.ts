import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';



@NgModule({
  declarations: [
    HomePagesComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    HomePagesComponent,
    AboutPageComponent
  ]
})
export class SharedModule { }
