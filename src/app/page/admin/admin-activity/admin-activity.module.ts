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


import { AdminActivityCourseComponent } from "./admin-activity-courses/admin-activity-course.component";
import { AdminActivityEventComponent } from "./admin-activity-events/admin-activity-event.component";
import { AdminActivityRouting } from "./admin-activity.routing";

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
        AdminActivityRouting
    ],
    declarations: [
        AdminActivityEventComponent,
        AdminActivityCourseComponent
    ],
    exports: [
        AdminActivityEventComponent,
        AdminActivityCourseComponent
    ]
})

export class AdminActivityModule { }