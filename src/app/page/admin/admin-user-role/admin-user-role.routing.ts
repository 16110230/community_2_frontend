import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminUserRoleCreateComponent } from "./admin-user-role-create/admin-user-role-create.component";
import { AdminUserRoleUpdateComponent } from "./admin-user-role-update/admin-user-role-update.component";

import { AdminUserRoleComponent } from "./admin-user-role/admin-user-role.component";


const routes: Routes = [
    {
        path: "",
        component: AdminUserRoleComponent
    },
    {
        path: "create",
        component: AdminUserRoleCreateComponent
    },
    {
        path: "update/:id",
        component: AdminUserRoleUpdateComponent
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
export class AdminUserRoleRouting { }