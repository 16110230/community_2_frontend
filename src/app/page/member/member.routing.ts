import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "src/app/component/nav-bar/navbar.component";

const routes: Routes = [
    {
        path: '',
        component: NavbarComponent,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'profile',
        component: NavbarComponent,
        loadChildren: () => import('./member-profile/member-profile.module').then(m => m.MemberProfileModule)
    },
    {
        path: 'thread-detail',
        component: NavbarComponent,
        loadChildren: () => import('./thread-detail/thread-detail.module').then(m => m.ThreadDetailModule)
    },
    {
        path: 'transaction',
        component: NavbarComponent,
        loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule)
    },
    {
        path: 'activity',
        component: NavbarComponent,
        loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule)
    },
    {
        path: 'subscription',
        component: NavbarComponent,
        loadChildren: () => import('./subscription/subscription.module').then(m => m.SubscriptionModule)
    },
    {
        path: 'send-validation',
        component: NavbarComponent,
        loadChildren: () => import('./send-validation/send-validation.module').then(m => m.SendValidationModule)
    },
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