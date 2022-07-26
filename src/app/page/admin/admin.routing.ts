import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AdminActivityEventComponent } from "./admin-activity-events-component/admin-activity-events.component"
import { AdminArticleCreateComponent } from "./admin-article-create.component/admin-article-create.component"
import { AdminArticles } from "./admin-articles.component/admin-articles.component"
import { AdminDashboardComponent } from "./admin-dashboard.component/admin-dashboard.component"
import { AdminInvoicesComponent } from "./admin-invoices.component/admin-invoices.component"
import { AdminOrganizationCompanyCreateComponent } from "./admin-organization-company-create.component/admin-organization-company-create.component"
import { AdminOrganizationCompanyUpdateComponent } from "./admin-organization-company-update.component/admin-organization-company-update.component"
import { AdminOrganizationCompanyComponent } from "./admin-organization-companys.component/admin-organization-companys.component"
import { AdminOrganizationIndustryCreateComponent } from "./admin-organization-industry-create.component/admin-organization-industry-create.component"
import { AdminOrganizationIndustryUpdateComponent } from "./admin-organization-industry-update.component/admin-organization-industry-update.component"
import { AdminOrganizationIndustryComponent } from "./admin-organization-industrys.component/admin-organization-industrys.component"
import { AdminOrganizationPositionCreateComponent } from "./admin-organization-position-create.component/admin-organization-position-create.component"
import { AdminOrganizationPositionUpdateComponent } from "./admin-organization-position-update.component/admin-organization-position-update.component"
import { AdminOrganizationPositionComponent } from "./admin-organization-positions.component/admin-organization-positions.component"
import { AdminThreadsComponents } from "./admin-threads.component/admin-threads.component"
import { AdminUsersComponents } from "./admin-users.component/admin-users.component"





const routes: Routes = [
    {
        path: '',
        component: AdminDashboardComponent
    },
    {
        path: 'event',
        component: AdminActivityEventComponent

    },
    {
        path: 'article',
        component: AdminArticles

    },
    {
        path: 'article/create',
        component: AdminArticleCreateComponent

    },
    {
        path: 'invoice',
        component: AdminInvoicesComponent
    },
    {
        path: 'organization/company',
        component: AdminOrganizationCompanyComponent
    },
    {
        path: 'organization/company/create',
        component: AdminOrganizationCompanyCreateComponent
    },
    {
        path: 'organization/company/update/:id',
        component: AdminOrganizationCompanyUpdateComponent
    },
    {
        path: 'organization/industry',
        component: AdminOrganizationIndustryComponent
    },
    {
        path: 'organization/industry/create',
        component: AdminOrganizationIndustryCreateComponent
    },
    {
        path: 'organization/industry/update/:id',
        component: AdminOrganizationIndustryUpdateComponent
    },
    {
        path: 'organization/position',
        component: AdminOrganizationPositionComponent
    },
    {
        path: 'organization/position/create',
        component: AdminOrganizationPositionCreateComponent
    },
    {
        path: 'organization/position/update/:id',
        component: AdminOrganizationPositionUpdateComponent
    },
    {
        path: 'thread',
        component: AdminThreadsComponents
    },
    {
        path: 'user',
        component: AdminUsersComponents
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