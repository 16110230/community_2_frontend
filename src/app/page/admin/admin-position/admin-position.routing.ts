import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminPositionComponent } from "./admin-position/admin-position.component";



const routes: Routes = [
    {
        path: '',
        component: AdminPositionComponent
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