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
        path: 'user-role',
        loadChildren: () => import('./admin-user-role/admin-user-role.module').then((m) => m.AdminUserRoleModule)
    },
    {
        path: 'thread',
        loadChildren: () => import('./admin-thread/admin-thread.module').then((m) => m.AdminThreadModule)
    },
    {
        path: 'activity-category',
        loadChildren: () => import('./admin-activity-category/admin-activity-category.module').then((m) => m.AdminActivityCategoryModule)
    },
    {
        path: 'activity-type',
        loadChildren: () => import('./admin-activity-type/admin-activity-type.module').then((m) => m.AdminActivityTypeModule)
    },
    {
        path: 'thread-category',
        loadChildren: () => import('./admin-thread-category/admin-thread-category.module').then((m) => m.AdminThreadCategoryModule)
    },
    {
        path: 'subscription-category',
        loadChildren: () => import('./admin-subscription-category/admin-subscription-category.module').then((m) => m.AdminSubscriptionCategoryModule)
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