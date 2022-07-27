import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { InsertThreadReq } from "src/app/dto/thread/insert-thread-req";


@Component({
    selector: "app-admin-article-create",
    templateUrl: "./admin-article-create.component.html"
})
export class AdminArticleCreateComponent {

    insertReq: InsertThreadReq = {}

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