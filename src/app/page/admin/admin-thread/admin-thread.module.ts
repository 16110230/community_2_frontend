import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { MenuModule } from "primeng/menu";
import { SidebarModule } from "primeng/sidebar";
import { TableModule } from "primeng/table";
import { SharedModule } from "src/app/component/shared.module";
import { AdminThreadRouting } from "./admin-thread.routing";
import { AdminThreadComponents } from "./admin-thread/admin-thread.component";

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
        AdminThreadRouting,
        ConfirmDialogModule
    ],
    declarations: [
        AdminThreadComponents
    ],
    exports: [
        AdminThreadComponents
    ],
    providers: [
        ConfirmationService,
        MessageService
    ]
})
export class AdminThreadModule { }