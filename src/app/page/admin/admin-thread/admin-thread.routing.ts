import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminThreadComponents } from "./admin-thread/admin-thread.component";


const routes: Routes = [
    {
        path: '',
        component: AdminThreadComponents
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