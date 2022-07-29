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
        path: 'articles',
        component: NavbarComponent,
        loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule)
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