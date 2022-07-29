import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-thread-category-update",
    templateUrl: "./admin-thread-category-update.component.html"
})
export class AdminThreadCategoryUpdateComponent {


    constructor(
        private router: Router
    ) { }

    goTo() {
        this.router.navigate(['/admin/threda-category'])
    }
}