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
import { ToastModule } from "primeng/toast";
import { SharedModule } from "src/app/component/shared.module";
import { AdminUserUpdateComponent } from "./admin-user-update/admin-user-update.component";
import { AdminUserRouting } from "./admin-user.routing";
import { AdminUserComponents } from "./admin-user/admin-user.component";

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
        AdminUserRouting,
        ToastModule
    ],
    declarations: [
        AdminUserComponents,
        AdminUserUpdateComponent
    ],
    exports: [
        AdminUserComponents,
        AdminUserUpdateComponent
    ]
})
export class AdminUserModule { }