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
import { AdminPositionCreateComponent } from "./admin-position-create/admin-position-create.component";
import { AdminPositionUpdateComponent } from "./admin-position-update/admin-position-update.component";
import { AdminPositionRouting } from "./admin-position.routing";
import { AdminPositionComponent } from "./admin-position/admin-position.component";


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
        AdminPositionRouting
    ],
    declarations: [
        AdminPositionComponent,
        AdminPositionCreateComponent,
        AdminPositionUpdateComponent
    ],
    exports: [
        AdminPositionComponent,
        AdminPositionCreateComponent,
        AdminPositionUpdateComponent
    ]
})
export class AdminPositionModule { }