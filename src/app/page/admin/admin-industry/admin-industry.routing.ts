import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminIndustryComponent } from "./admin-industry/admin-industry.component";


const routes: Routes = [
    {
        path: '',
        component: AdminIndustryComponent
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