import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { CheckboxModule } from "primeng/checkbox";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { MenuModule } from "primeng/menu";
import { SidebarModule } from "primeng/sidebar";
import { TableModule } from "primeng/table";
import { SharedModule } from "src/app/component/shared.module";
import { PipeModule } from "src/app/pipe/pipe.module";
import { AdminSubscriptionCategoryCreateComponent } from "./admin-subcription-category-create/admin-subscription-category-create.component";
import { AdminSubscriptionCategoryUpdateComponent } from "./admin-subscription-category-update/admin-subscription-category-update.component";
import { AdminSubscriptionCategoryRouting } from "./admin-subscription-category.routing";
import { AdminSubscriptionCategoryComponent } from "./admin-subscription-category/admin-subscription-category.component";

@NgModule({
    imports: [
        SharedModule,
        PipeModule,
        FormsModule,
        CommonModule,
        ButtonModule,
        CardModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        SidebarModule,
        MenuModule,
        TableModule,
        ConfirmDialogModule,
        CheckboxModule,
        AdminSubscriptionCategoryRouting
    ],
    exports: [
        AdminSubscriptionCategoryComponent,
        AdminSubscriptionCategoryCreateComponent,
        AdminSubscriptionCategoryUpdateComponent
    ],
    declarations: [
        AdminSubscriptionCategoryComponent,
        AdminSubscriptionCategoryCreateComponent,
        AdminSubscriptionCategoryUpdateComponent
    ]
})
export class AdminSubscriptionCategoryModule { }