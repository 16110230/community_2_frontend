import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-article-update",
    templateUrl: "./admin-article-update.component.html"
})

export class AdminArticleUpdateComponent {
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