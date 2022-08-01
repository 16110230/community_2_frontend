import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SendValidationCourseComponent } from "./send-validation-course/send-validation-course.component";
import { SendValidationEventComponent } from "./send-validation-event/send-validation-event.component";


const routes: Routes = [
    {
        path: 'event/:id',
        component: SendValidationEventComponent
    },
    {
        path: 'course/:id',
        component: SendValidationCourseComponent
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
export class SendValidationRouting { }