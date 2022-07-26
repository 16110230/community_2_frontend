import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminUserComponents } from "./admin-user/admin-user.component";


const routes: Routes = [
    {
        path: '',
        component: AdminUserComponents
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