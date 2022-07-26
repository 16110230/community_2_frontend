import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-admin-activity-event",
    templateUrl: "./admin-activity-event.component.html"
})
export class AdminActivityEventComponent {
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