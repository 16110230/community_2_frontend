import { Component } from "@angular/core";

@Component({
    selector: "app-admin-activity-course",
    templateUrl: "./admin-activity-course.component.html"
})
export class AdminActivityCourseComponent {
    activitys = [
        {
            id: 1,
            activityTitle: "new Event",
            activityCategoryName: "",
            fee: 20000,
            isLimit: true,
            isActive: true

        }
    ]
}