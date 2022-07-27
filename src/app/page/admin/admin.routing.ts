import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component"

const routes: Routes = [
    {
        path: '',
        component: AdminDashboardComponent
    },
    {
        path: 'activity',
        loadChildren: () => import('./admin-activity/admin-activity.module').then((m) => m.AdminActivityModule)
    },
    {
        path: 'article',
        loadChildren: () => import('./admin-article/admin-article.module').then((m) => m.AdminArticleModule)
    },
    {
        path: 'invoice',
        loadChildren: () => import('./admin-invoice/admin-invoice.module').then((m) => m.AdminInvoiceModule)
    },
    {
        path: 'company',
        loadChildren: () => import('./admin-company/admin-company.module').then((m) => m.AdminCompanyModule)
    },
    {
        path: 'industry',
        loadChildren: () => import('./admin-industry/admin-industry.module').then((m) => m.AdminIndustryModule)
    },
    {
        path: 'position',
        loadChildren: () => import('./admin-position/admin-position.module').then((m) => m.AdminPositionModule)
    },
    {
        path: 'user',
        loadChildren: () => import('./admin-user/admin-user.module').then((m) => m.AdminUserModule)
    },
    {
        path: 'thread',
        loadChildren: () => import('./admin-thread/admin-thread.module').then((m) => m.AdminThreadModule)
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