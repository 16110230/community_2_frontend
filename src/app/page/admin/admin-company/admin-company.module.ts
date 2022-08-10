import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { MenuModule } from "primeng/menu";
import { SidebarModule } from "primeng/sidebar";
import { TableModule } from "primeng/table";
import { SharedModule } from "src/app/component/shared.module";
import { AdminCompanyCreateComponent } from "./admin-company-create/admin-company-create.component";
import { AdminCompanyUpdateComponent } from "./admin-company-update/admin-company-update.component";
import { AdminCompanyRouting } from "./admin-company.routing";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { AdminCompanyComponent } from "./admin-company/admin-company.component";
import { InputTextareaModule } from "primeng/inputtextarea";
import { CheckboxModule } from "primeng/checkbox";

@NgModule({
    imports: [
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
        ConfirmDialogModule,
        AdminCompanyRouting,
        InputTextareaModule,
        CheckboxModule
    ],
    declarations: [
        AdminCompanyComponent,
        AdminCompanyCreateComponent,
        AdminCompanyUpdateComponent
    ],
    exports: [
        AdminCompanyComponent,
        AdminCompanyCreateComponent,
        AdminCompanyUpdateComponent
    ]
})
export class AdminCompanyModule { }