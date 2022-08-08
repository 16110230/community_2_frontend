import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminSubscriptionCategoryCreateComponent } from "./admin-subcription-category-create/admin-subscription-category-create.component";
import { AdminSubscriptionCategoryUpdateComponent } from "./admin-subscription-category-update/admin-subscription-category-update.component";
import { AdminSubscriptionCategoryComponent } from "./admin-subscription-category/admin-subscription-category.component";

const routes: Routes = [
    {
        path: '',
        component: AdminSubscriptionCategoryComponent
    },
    {
        path: 'create',
        component: AdminSubscriptionCategoryCreateComponent
    },
    {
        path: 'update/:id',
        component: AdminSubscriptionCategoryUpdateComponent
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
export class AdminSubscriptionCategoryRouting {}