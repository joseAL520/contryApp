import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './shared/pages/home-pages/home-pages.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';

const router: Routes = [
    {
        path: 'home', component: HomePagesComponent
    },
    {
        path: 'about', component: AboutPageComponent
    },
    {
        path: '**', redirectTo: 'home'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(router),

    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class AppRoutingModule { }
