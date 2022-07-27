import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-industry-update",
    templateUrl: "./admin-industry-update.component.html"
})
export class AdminIndustryUpdateComponent {


    constructor(
        private router: Router
    ) { }
    goTo() {
        this.router.navigate(['/admin/industry'])
    }
}