import { Component } from "@angular/core";

@Component({
    selector: "app-admin-article-create",
    templateUrl: "./admin-article-create.component.html"
})
export class AdminArticleCreateComponent {
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
}