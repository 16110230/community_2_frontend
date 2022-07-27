import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginModule } from "./page/login/login.module";
import { LoginComponent } from "./page/login/login/login.component";




const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "signup",
        loadChildren: () => import('./page/signup/signup.module').then((m) => m.SignupModule)
    },
    {
        path: "admin",
        loadChildren: () => import('./page/admin/admin.module').then((m) => m.AdminModule)
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        LoginModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting { }