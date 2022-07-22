import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./page/login/login.component/login.component";
import { LoginModule } from "./page/login/login.module";




const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "signup",
        loadChildren: () => import('./page/signup/signup.module').then((m) => m.SignupModule)
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