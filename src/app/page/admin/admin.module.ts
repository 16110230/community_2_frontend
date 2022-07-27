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
import { ConfirmDialogModule } from 'primeng/confirmdialog';


import { AdminRouting } from "./admin.routing";
import { SharedModule } from "src/app/component/shared.module";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { ConfirmationService, MessageService } from "primeng/api";


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
    ],
    exports: [
        AdminDashboardComponent
    ]
})
export class AdminModule { }