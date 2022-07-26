import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminCompanyComponent } from "./admin-company/admin-company.component";


const routes: Routes = [
    {
        path: '',
        component: AdminCompanyComponent
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
export class AdminCompanyRouting { }