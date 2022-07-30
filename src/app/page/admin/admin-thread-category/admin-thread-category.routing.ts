import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminThreadCategoryCreateComponent } from "./admin-thread-category-create/admin-thread-category-create.component";
import { AdminThreadCategoryUpdateComponent } from "./admin-thread-category-update/admin-thread-category-update.component";
import { AdminThreadCategoryComponent } from "./admin-thread-category/admin-thread-category.component";



const routes: Routes = [
    {
        path: '',
        component: AdminThreadCategoryComponent
    },
    {
        path: 'create',
        component: AdminThreadCategoryCreateComponent
    },
    {
        path: 'update/:id',
        component: AdminThreadCategoryUpdateComponent
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
export class AdminThreadCategoryRouting { }