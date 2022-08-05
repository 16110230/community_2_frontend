import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthAdminGuard } from "./guard/auth-admin.guard";
import { AuthLoginGuard } from "./guard/auth-login.guard";
import { ForbiddenComponent } from "./page/forbidden/forbidden.component";
import { NotFoundComponent } from "./page/not-found/not-found.component";




const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./page/member/member.module').then(m => m.MemberModule)
    },
    {
        path: 'login',
        canLoad: [AuthLoginGuard],
        loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'signup',
        loadChildren: () => import('./page/signup/signup.module').then((m) => m.SignupModule)
    },
    {
        path: 'admin',
        canLoad: [AuthAdminGuard],
        loadChildren: () => import('./page/admin/admin.module').then((m) => m.AdminModule)
    },
    {
        path: 'forbidden-page',
        component: ForbiddenComponent
    },
    {
        path : '',
        redirectTo : '/home',
        pathMatch : 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting { }