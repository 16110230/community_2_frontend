import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { InsertActivityCategoryReq } from "src/app/dto/activity-category/insert-activity-category-req";

@Component({
    selector: "app-admin-activity-category-create",
    templateUrl: "./admin-activity-category-create.component.html"
})
export class AdminActivityCategoryCreate{
    insertReq: InsertActivityCategoryReq = {}

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
        private router: Router,
    ) { }

    goTo() {
        this.router.navigate(['/admin/article'])
    }
}