import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "src/app/component/nav-bar/navbar.component";

const routes : Routes = [
    {
        path: '',
        component: NavbarComponent,
        loadChildren : () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'thread-detail',
        component: NavbarComponent,
        loadChildren : () => import('./thread-detail/thread-detail.module').then(m => m.ThreadDetailModule)
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
export class MemberRouting {}