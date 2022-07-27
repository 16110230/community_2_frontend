import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-position-update",
    templateUrl: "./admin-position-update.component.html"
})
export class AdminPositionUpdateComponent {


    constructor(
        private router: Router
    ) { }
    goTo() {
        this.router.navigate(['/admin/position'])
    }

}