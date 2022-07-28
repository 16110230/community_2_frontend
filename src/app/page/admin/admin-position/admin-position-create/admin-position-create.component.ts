import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-position-create",
    templateUrl: "./admin-position-create.component.html"
})
export class AdminPositionCreateComponent {

    constructor(
        private router: Router
    ) { }

    goTo() {
        this.router.navigate(['/admin/position'])
    }
}