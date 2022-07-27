import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-article",
    templateUrl: "./admin-article.component.html"
})
export class AdminArticleComponent {
    articles = [
        {
            id: 1,
            title: "this is title to express how long this title can be, and to see is table can handle long title",
            category: "category1",
            isActive: true

        },
        {
            id: 2,
            title: "this is title to express how long this title can be, and to see is table can handle long title",
            category: "category1",
            isActive: false

        }
    ]

    constructor(
        private router: Router
    ) { }

    goTo() {
        this.router.navigate(['admin/article/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/article/update/${id}`])
    }
}