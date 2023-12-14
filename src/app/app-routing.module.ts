import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { HomePagesComponent } from './shared/pages/home-pages/home-pages.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContacPagesComponent } from './shared/pages/contac-pages/contac-pages.component';

const router: Routes = [
    // {
    //     path: 'home', component: HomePagesComponent
    // },
    {
        path: 'about', component: AboutPageComponent
    },
    {
        path: 'contac', component: ContacPagesComponent
    },
    {
        // carga perezoza, en esta entresalo el router padre con el hijo
        path: 'contries',loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
    },
    {
        path: '**', redirectTo: 'contries'
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
