import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UpdateThreadReq } from "src/app/dto/thread/update-thread-req";

@Component({
    selector: "app-admin-activity-type-update",
    templateUrl: "./admin-activity-type-update.component.html"
})
export class AdminActivityTypeUpdate{
    updateReq: UpdateThreadReq = {}

    categorys = [
        {
            id: 1,
            categoryName: "category1"
        },
        {
            id: 2,
            categoryName: "category2"
        }
    ]

    constructor(
        private router: Router
    ) { }

    goTo() {
        this.router.navigate(['/admin/article'])
    }
}