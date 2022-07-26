import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';



import { AdminRouting } from "./admin.routing";
import { AdminDashboardComponent } from "./admin-dashboard.component/admin-dashboard.component";
import { AdminInvoicesComponent } from "./admin-invoices.component/admin-invoices.component";
import { AdminArticleCreateComponent } from "./admin-article-create.component/admin-article-create.component";
import { SharedModule } from "src/app/component/shared.module";
import { AdminThreadsComponents } from "./admin-threads.component/admin-threads.component";
import { AdminArticles } from "./admin-articles.component/admin-articles.component";
import { AdminUsersComponents } from "./admin-users.component/admin-users.component";
import { AdminOrganizationCompanyComponent } from "./admin-organization-companys.component/admin-organization-companys.component";
import { AdminOrganizationCompanyCreateComponent } from "./admin-organization-company-create.component/admin-organization-company-create.component";
import { AdminOrganizationCompanyUpdateComponent } from "./admin-organization-company-update.component/admin-organization-company-update.component";
import { AdminOrganizationIndustryComponent } from "./admin-organization-industrys.component/admin-organization-industrys.component";
import { AdminOrganizationIndustryCreateComponent } from "./admin-organization-industry-create.component/admin-organization-industry-create.component";
import { AdminOrganizationIndustryUpdateComponent } from "./admin-organization-industry-update.component/admin-organization-industry-update.component";
import { AdminOrganizationPositionComponent } from "./admin-organization-positions.component/admin-organization-positions.component";
import { AdminOrganizationPositionCreateComponent } from "./admin-organization-position-create.component/admin-organization-position-create.component";
import { AdminOrganizationPositionUpdateComponent } from "./admin-organization-position-update.component/admin-organization-position-update.component";
import { AdminActivityEventComponent } from "./admin-activity-events-component/admin-activity-events.component";




@NgModule({
    imports: [
        AdminRouting,
        SharedModule,
        FormsModule,
        CommonModule,
        ButtonModule,
        CardModule,
        InputTextModule,
        DropdownModule,
        SidebarModule,
        MenuModule,
        TableModule
    ],
    declarations: [
        AdminDashboardComponent,
        AdminInvoicesComponent,
        AdminActivityEventComponent,
        AdminArticles,
        AdminArticleCreateComponent,
        AdminOrganizationCompanyComponent,
        AdminOrganizationCompanyCreateComponent,
        AdminOrganizationCompanyUpdateComponent,
        AdminOrganizationIndustryComponent,
        AdminOrganizationIndustryCreateComponent,
        AdminOrganizationIndustryUpdateComponent,
        AdminOrganizationPositionComponent,
        AdminOrganizationPositionCreateComponent,
        AdminOrganizationPositionUpdateComponent,
        AdminThreadsComponents,
        AdminUsersComponents
    ],
    exports: [
        AdminDashboardComponent,
        AdminInvoicesComponent,
        AdminActivityEventComponent,
        AdminArticles,
        AdminArticleCreateComponent,
        AdminOrganizationCompanyComponent,
        AdminOrganizationCompanyCreateComponent,
        AdminOrganizationCompanyUpdateComponent,
        AdminOrganizationIndustryComponent,
        AdminOrganizationIndustryCreateComponent,
        AdminOrganizationIndustryUpdateComponent,
        AdminOrganizationPositionComponent,
        AdminOrganizationPositionCreateComponent,
        AdminOrganizationPositionUpdateComponent,
        AdminThreadsComponents,
        AdminUsersComponents
    ]
})
export class AdminModule { }