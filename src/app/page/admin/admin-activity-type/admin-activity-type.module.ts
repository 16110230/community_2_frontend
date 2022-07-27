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
import { AdminActivityTypeCreate } from "./admin-activity-type-create/admin-activity-type-create.component";
import { AdminActivityTypeUpdate } from "./admin-activity-type-update/admin-activity-type-update.component";
import { AdminActivityTypeRouting } from "./admin-activity-type.routing";
import { AdminActivityType } from "./admin-activity-type/admin-activity-type.component";

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
        AdminActivityTypeRouting
    ],
    declarations: [
        AdminActivityType,
        AdminActivityTypeCreate,
        AdminActivityTypeUpdate
    ],
    exports: [
        AdminActivityType,
        AdminActivityTypeCreate,
        AdminActivityTypeUpdate
    ]
})
export class AdminActivityTypeModule{}