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
        TableModule,
        InputTextModule
    ],
    declarations: [
        AdminDashboardComponent,
        AdminInvoicesComponent,
        AdminArticleCreateComponent
    ],
    exports: [
        AdminDashboardComponent,
        AdminInvoicesComponent,
        AdminArticleCreateComponent
    ]
})
export class AdminModule { }