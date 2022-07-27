import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminThreadUpdateComponent } from "./admin-thread-update/admin-thread-update.component";
import { AdminThreadComponents } from "./admin-thread/admin-thread.component";


const routes: Routes = [
    {
        path: '',
        component: AdminThreadComponents
    },
    {
        path: 'update/:id',
        component: AdminThreadUpdateComponent
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
export class AdminThreadRouting { }