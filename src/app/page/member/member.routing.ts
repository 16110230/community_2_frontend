import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "src/app/component/nav-bar/navbar.component";
import { AuthMemberGuard } from "src/app/guard/auth-member.guard";

const routes: Routes = [
    {
        path: '',
        component: NavbarComponent,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'profiles',
        component: NavbarComponent,
        canLoad: [AuthMemberGuard],
        loadChildren: () => import('./member-profile/member-profile.module').then(m => m.MemberProfileModule)
    },
    {
        path: 'thread-detail',
        component: NavbarComponent,
        canLoad: [AuthMemberGuard],
        loadChildren: () => import('./thread-detail/thread-detail.module').then(m => m.ThreadDetailModule)
    },
    {
        path: 'activities',
        component: NavbarComponent,
        canLoad: [AuthMemberGuard],
        loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule)
    },
    {
        path: 'subscriptions',
        component: NavbarComponent,
        canLoad: [AuthMemberGuard],
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
        canLoad: [AuthMemberGuard],
        loadChildren: () => import('./articles/article.module').then(m => m.ArticleModule)
    },
    {
        path: 'new-thread',
        component: NavbarComponent,
        canLoad: [AuthMemberGuard],
        loadChildren : () => import('./thread-create/thread-create.module').then(m => m.ThreadCreateModule)
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