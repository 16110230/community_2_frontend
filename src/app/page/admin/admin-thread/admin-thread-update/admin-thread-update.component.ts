import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-thread-update",
    templateUrl: "./admin-thread-update.component.html"
})
export class AdminThreadUpdateComponent {

    constructor(
        private router: Router
    ) { }

    goTo() {
        this.router.navigate([`/admin/thread`])
    }
}