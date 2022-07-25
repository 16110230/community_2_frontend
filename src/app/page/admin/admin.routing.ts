import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AdminArticleCreateComponent } from "./admin-article-create.component/admin-article-create.component"
import { AdminDashboardComponent } from "./admin-dashboard.component/admin-dashboard.component"
import { AdminInvoicesComponent } from "./admin-invoices.component/admin-invoices.component"




const routes: Routes = [
    {
        path: '',
        component: AdminDashboardComponent
    },
    {
        path: 'invoices',
        component: AdminInvoicesComponent
    },
    {
        path: 'article/create',
        component: AdminArticleCreateComponent

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
export class AdminRouting { }