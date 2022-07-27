import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminActivityCategoryCreate } from "./admin-activity-category-create/admin-activity-category-create.component";
import { AdminActivityCategoryUpdate } from "./admin-activity-category-update/admin-activity-category-update.component";
import { AdminActivityCategory } from "./admin-activity-category/admin-activity-category.component";

const routes: Routes = [
    {
        path: '',
        component: AdminActivityCategory
    },
    {
        path: 'create',
        component: AdminActivityCategoryCreate
    },
    {
        path: 'update/:id',
        component: AdminActivityCategoryUpdate
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
export class AdminActivityCategoryRouting{}