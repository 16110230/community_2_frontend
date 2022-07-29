import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-thread-category-create",
    templateUrl: "./admin-thread-category-create.component.html"
})
export class AdminThreadCategoryCreateComponent {

    constructor(
        private router: Router
    ) { }

    goTo() {
        this.router.navigate(['/admin/thread-category'])
    }
}