import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminIndustryCreateComponent } from "./admin-industry-create/admin-industry-create.component";
import { AdminIndustryUpdateComponent } from "./admin-industry-update/admin-industry-update.component";
import { AdminIndustryComponent } from "./admin-industry/admin-industry.component";


const routes: Routes = [
    {
        path: '',
        component: AdminIndustryComponent
    },
    {
        path: 'create',
        component: AdminIndustryCreateComponent
    },
    {
        path: 'update/:id',
        component: AdminIndustryUpdateComponent
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
export class AdminIndustryRouting { }