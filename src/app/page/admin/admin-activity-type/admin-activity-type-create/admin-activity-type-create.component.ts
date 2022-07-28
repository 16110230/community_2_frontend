import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { InsertActyivityTypeReq } from "src/app/dto/activity-type/insert-activity-type-req";

@Component({
    selector: "app-admin-activity-type-create",
    templateUrl: "./admin-activity-type-create.component.html"
})
export class AdminActivityTypeCreate{
    insertReq: InsertActyivityTypeReq = {}

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