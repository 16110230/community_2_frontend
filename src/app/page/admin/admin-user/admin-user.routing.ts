import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminUserUpdateComponent } from "./admin-user-update/admin-user-update.component";
import { AdminUserComponents } from "./admin-user/admin-user.component";


const routes: Routes = [
    {
        path: '',
        component: AdminUserComponents
    },
    {
        path: ':id',
        component: AdminUserUpdateComponent
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
export class AdminUserRouting { }