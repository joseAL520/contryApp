import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByCapialPageComponent } from './pages/by-capial-page/by-capial-page.component';
import { ByContryPageComponent } from './pages/by-contry-page/by-contry-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ContryPageComponent } from './pages/contry-page/contry-page.component';

const routes: Routes=[
    {
        path:'by-capital' , component:ByCapialPageComponent
    },
    {
        path:'by-country' , component:ByContryPageComponent
    },{
        path:'by-regin' , component:ByRegionPageComponent
    },{
        //esto indicia que vamos a recibir un argumento
        path:'by/:id' , component:ContryPageComponent
    },{
        path: '**', redirectTo: 'contries'
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class ContriesRouterModule { }
