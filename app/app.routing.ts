/**
 * Created by dennis.zhao on 2016/10/9.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {AuthGuard} from "./app.authguard";
import {LoginComponent} from "./login/js/login.component";
import {PageNotFoundComponent} from "./404.component";

const appRoutes: Routes = [

    {
        path:'',
        component:AppComponent,
        canActivate:[AuthGuard],
    },

    {
        path:'login',
        component:LoginComponent,
    },
    {
        path: '**',
        component:PageNotFoundComponent,
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);