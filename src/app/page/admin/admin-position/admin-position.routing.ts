import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminPositionCreateComponent } from "./admin-position-create/admin-position-create.component";
import { AdminPositionUpdateComponent } from "./admin-position-update/admin-position-update.component";
import { AdminPositionComponent } from "./admin-position/admin-position.component";



const routes: Routes = [
    {
        path: '',
        component: AdminPositionComponent
    },
    {
        path: 'create',
        component: AdminPositionCreateComponent
    },
    {
        path: 'update/:id',
        component: AdminPositionUpdateComponent
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
export class AdminPositionRouting { }