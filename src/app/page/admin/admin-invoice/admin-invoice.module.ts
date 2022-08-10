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
import { ImageModule } from 'primeng/image';
import { AdminInvoiceCoursePendingComponent } from "./admin-invoice-course-pending/admin-invoice-course-pending.component";
import { AdminInvoiceCourseComponent } from "./admin-invoice-course/admin-invoice-course.component";
import { AdminInvoiceEventPendingComponent } from "./admin-invoice-event-pending/admin-invoice-event-pending.component";
import { AdminInvoiceEventComponent } from "./admin-invoice-event/admin-invoice-event.component";
import { AdminInvoiceSubscribePendingComponent } from "./admin-invoice-subscribe-pending/admin-invoice-subscribe-pending.component";
import { AdminInvoiceSubscribeComponent } from "./admin-invoice-subscribe/admin-invoice-subscribe.component";
import { AdminInvoiceRouting } from "./admin-invoice.routing";
import { PipeModule } from "src/app/pipe/pipe.module";


@NgModule({
    imports: [
        SharedModule,
        PipeModule,
        FormsModule,
        CommonModule,
        ButtonModule,
        CardModule,
        InputTextModule,
        DropdownModule,
        SidebarModule,
        MenuModule,
        TableModule,
        ImageModule,
        AdminInvoiceRouting
    ],
    declarations: [
        AdminInvoiceSubscribeComponent,
        AdminInvoiceEventComponent,
        AdminInvoiceCourseComponent,
        AdminInvoiceSubscribePendingComponent,
        AdminInvoiceEventPendingComponent,
        AdminInvoiceCoursePendingComponent
    ],
    exports: [
        AdminInvoiceSubscribeComponent,
        AdminInvoiceEventComponent,
        AdminInvoiceCourseComponent,
        AdminInvoiceSubscribePendingComponent,
        AdminInvoiceEventPendingComponent,
        AdminInvoiceCoursePendingComponent
    ]
})
export class AdminInvoiceModule { }