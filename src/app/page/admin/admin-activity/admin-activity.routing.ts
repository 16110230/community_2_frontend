import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminActivityCourseComponent } from "./admin-activity-courses/admin-activity-course.component";
import { AdminActivityCourseDetailComponent } from "./admin-activity-course-detail/admin-activity-detail.component";
import { AdminActivityEventComponent } from "./admin-activity-events/admin-activity-event.component";
import { AdminActivityEventDetailComponent } from "./admin-activity-event-detail/admin-activity-detail.component";

const routes: Routes = [
    {
        path: 'event',
        component: AdminActivityEventComponent
    },
    {
        path: 'event/detail/:id',
        component: AdminActivityEventDetailComponent
    },
    {
        path: 'course',
        component: AdminActivityCourseComponent
    },
    {
        path: 'course/detail/:id',
        component: AdminActivityCourseDetailComponent
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