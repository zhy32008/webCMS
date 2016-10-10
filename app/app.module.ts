import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import {LoginComponent} from "./login/js/login.component";
import {routing} from "./app.routing";
import {AuthGuard} from "./app.authguard";
import {PageNotFoundComponent} from "./404.component";

@NgModule({
  imports: [ BrowserModule,NgbModule,routing ],
  declarations: [ AppComponent, LoginComponent,PageNotFoundComponent ],
  bootstrap: [ AppComponent ],
  providers: [AuthGuard]
})
export class AppModule { }
