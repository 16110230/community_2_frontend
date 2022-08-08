import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "src/app/component/nav-bar/navbar.component";
import { AuthAdminGuard } from "src/app/guard/auth-admin.guard";
import { AuthCheckLoginGuard } from "src/app/guard/auth-check-login.guard";
import { AuthLoginGuard } from "src/app/guard/auth-login.guard";

const routes: Routes = [
    {
        path: '',
        component: NavbarComponent,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'profiles',
        component: NavbarComponent,
        canLoad: [AuthLoginGuard],
        loadChildren: () => import('./member-profile/member-profile.module').then(m => m.MemberProfileModule)
    },
    {
        path: 'thread-detail',
        component: NavbarComponent,
        loadChildren: () => import('./thread-detail/thread-detail.module').then(m => m.ThreadDetailModule)
    },
    {
        path: 'activities',
        component: NavbarComponent,
        canLoad: [AuthLoginGuard],
        loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule)
    },
    {
        path: 'subscriptions',
        component: NavbarComponent,
        loadChildren: () => import('./subscription/subscription.module').then(m => m.SubscriptionModule)
    },
    {
        path: 'send-validation',
        component: NavbarComponent,
        loadChildren: () => import('./send-validation/send-validation.module').then(m => m.SendValidationModule)
    },
    {
        path: 'articles',
        component: NavbarComponent,
        loadChildren: () => import('./articles/article.module').then(m => m.ArticleModule)
    }

]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MemberRouting { }