import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminInvoiceCoursePendingComponent } from "./admin-invoice-course-pending/admin-invoice-course-pending.component";
import { AdminInvoiceCourseComponent } from "./admin-invoice-course/admin-invoice-course.component";
import { AdminInvoiceEventPendingComponent } from "./admin-invoice-event-pending/admin-invoice-event-pending.component";
import { AdminInvoiceEventComponent } from "./admin-invoice-event/admin-invoice-event.component";
import { AdminInvoiceSubscribePendingComponent } from "./admin-invoice-subscribe-pending/admin-invoice-subscribe-pending.component";
import { AdminInvoiceSubscribeComponent } from "./admin-invoice-subscribe/admin-invoice-subscribe.component";




const routes: Routes = [
    {
        path: 'subscribe',
        component: AdminInvoiceSubscribeComponent
    },
    {
        path: 'subscribe/pending',
        component: AdminInvoiceSubscribePendingComponent
    },
    {
        path: 'event',
        component: AdminInvoiceEventComponent
    },
    {
        path: 'event/pending',
        component: AdminInvoiceEventPendingComponent
    },
    {
        path: 'course',
        component: AdminInvoiceCourseComponent
    },
    {
        path: 'course/pending',
        component: AdminInvoiceCoursePendingComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminInvoiceRouting { }