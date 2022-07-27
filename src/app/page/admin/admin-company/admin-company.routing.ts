import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminCompanyCreateComponent } from "./admin-company-create/admin-company-create.component";
import { AdminCompanyUpdateComponent } from "./admin-company-update/admin-company-update.component";
import { AdminCompanyComponent } from "./admin-company/admin-company.component";


const routes: Routes = [
    {
        path: '',
        component: AdminCompanyComponent
    },
    {
        path: 'create',
        component: AdminCompanyCreateComponent
    },
    {
        path: 'update/:id',
        component: AdminCompanyUpdateComponent
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