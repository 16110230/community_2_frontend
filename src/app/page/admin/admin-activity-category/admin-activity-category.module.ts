import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { MenuModule } from "primeng/menu";
import { SidebarModule } from "primeng/sidebar";
import { TableModule } from "primeng/table";
import { SharedModule } from "src/app/component/shared.module";
import { AdminActivityCategoryCreate } from "./admin-activity-category-create/admin-activity-category-create.component";
import { AdminActivityCategoryUpdate } from "./admin-activity-category-update/admin-activity-category-update.component";
import { AdminActivityCategoryRouting } from "./admin-activity-category.routing";
import { AdminActivityCategory } from "./admin-activity-category/admin-activity-category.component";

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
        AdminActivityCategoryRouting
    ],
    declarations: [
        AdminActivityCategory,
        AdminActivityCategoryCreate,
        AdminActivityCategoryUpdate
    ],
    exports: [
        AdminActivityCategory,
        AdminActivityCategoryCreate,
        AdminActivityCategoryUpdate
    ]
})
export class AdminActivityCategoryModule{}