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
import { AdminThreadCategoryCreateComponent } from "./admin-thread-category-create/admin-thread-category-create.component";
import { AdminThreadCategoryUpdateComponent } from "./admin-thread-category-update/admin-thread-category-update.component";
import { AdminThreadCategoryRouting } from "./admin-thread-category.routing";
import { AdminThreadCategoryComponent } from "./admin-thread-category/admin-thread-category.component";


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
        AdminThreadCategoryRouting
    ],
    declarations: [
        AdminThreadCategoryComponent,
        AdminThreadCategoryCreateComponent,
        AdminThreadCategoryUpdateComponent
    ],
    exports: [
        AdminThreadCategoryComponent,
        AdminThreadCategoryCreateComponent,
        AdminThreadCategoryUpdateComponent
    ]
})
export class AdminThreadCategoryModule { }