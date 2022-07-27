import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminActivityTypeCreate } from "./admin-activity-type-create/admin-activity-type-create.component";
import { AdminActivityTypeUpdate } from "./admin-activity-type-update/admin-activity-type-update.component";
import { AdminActivityType } from "./admin-activity-type/admin-activity-type.component";

const routes: Routes = [
    {
        path: '',
        component: AdminActivityType
    },
    {
        path: 'create',
        component: AdminActivityTypeCreate
    },
    {
        path: 'update/:id',
        component: AdminActivityTypeUpdate
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
export class AdminActivityTypeRouting{}