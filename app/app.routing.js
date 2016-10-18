"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var app_authguard_1 = require("./app.authguard");
var login_component_1 = require("./login/js/login.component");
var _404_component_1 = require("./404.component");
var appRoutes = [
    {
        path: '',
        component: app_component_1.AppComponent,
        canActivate: [app_authguard_1.AuthGuard],
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
    },
    {
        path: '**',
        component: _404_component_1.PageNotFoundComponent,
    }
];
// the RouterModule is provided an array of routes that describe how to navigate. Each Route maps a URL path to a component.
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map