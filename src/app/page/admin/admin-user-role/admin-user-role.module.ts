import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { CheckboxModule } from "primeng/checkbox";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { MenuModule } from "primeng/menu";
import { SidebarModule } from "primeng/sidebar";
import { TableModule } from "primeng/table";
import { SharedModule } from "src/app/component/shared.module";
import { AdminUserRoleCreateComponent } from "./admin-user-role-create/admin-user-role-create.component";
import { AdminUserRoleUpdateComponent } from "./admin-user-role-update/admin-user-role-update.component";
import { AdminUserRoleRouting } from "./admin-user-role.routing";
import { AdminUserRoleComponent } from "./admin-user-role/admin-user-role.component";

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
        CheckboxModule,
        AdminUserRoleRouting
    ],
    declarations: [
        AdminUserRoleComponent,
        AdminUserRoleCreateComponent,
        AdminUserRoleUpdateComponent
    ],
    exports: [
        AdminUserRoleComponent,
        AdminUserRoleCreateComponent,
        AdminUserRoleUpdateComponent
    ]
})
export class AdminUserRoleModule { }