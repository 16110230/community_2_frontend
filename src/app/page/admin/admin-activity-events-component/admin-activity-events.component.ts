import { Component, OnInit } from "@angular/core";
import { PojoActivity } from "src/app/pojo/activity/pojoActivity";

@Component({
    selector: "app-admin-activity-events",
    templateUrl: "./admin-activity-events.component.html"
})
export class AdminActivityEventComponent implements OnInit {

    activitys: PojoActivity[] = []

    ngOnInit() {
        this.activitys = [
            {
                id: 1,
                activityCategory: 1,
                activityCategoryName: "event",
                isLimit: true,
                isActive: true,
                version: 1

                // activityTitle: "Training",
                // fee: 20000,
            }
        ]
    }
}