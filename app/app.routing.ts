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
        path:'',//the empty path matches as the default path for each level of routing. It also allows for adding routes without extending the URL path
        component:AppComponent,
        canActivate:[AuthGuard],
    },

    {
        path:'login',
        component:LoginComponent,
    },
    {
        path: '**',//the ** denotes a wildcard path for our route.
        component:PageNotFoundComponent,
    }
];
// the RouterModule is provided an array of routes that describe how to navigate. Each Route maps a URL path to a component.
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);