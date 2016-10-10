/**
 * Created by dennis.zhao on 2016/10/9.
 */
import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

var KEY_TOKEN = 'web.token';
@Injectable()

export class AuthGuard implements CanActivate{

    constructor(protected router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {


        var mytoken = window.localStorage.getItem(KEY_TOKEN);

        if (mytoken){

            console.log('token is '+ mytoken);
            return true;
        }

        this.router.navigate(['/login']);

        return false;
    }
}