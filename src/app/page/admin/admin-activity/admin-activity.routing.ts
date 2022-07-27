import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminActivityCourseComponent } from "./admin-activity-courses/admin-activity-course.component";
import { AdminActivityEventComponent } from "./admin-activity-events/admin-activity-event.component";

const routes: Routes = [
    {
        path: 'event',
        component: AdminActivityEventComponent
    },
    {
        path: 'course',
        component: AdminActivityCourseComponent
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
export class AdminActivityRouting { }