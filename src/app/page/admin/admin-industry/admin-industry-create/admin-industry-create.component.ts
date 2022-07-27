import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-industry-create",
    templateUrl: "./admin-industry-create.component.html"
})
export class AdminIndustryCreateComponent {

    constructor(
        private router: Router
    ) { }

    goTo() {
        this.router.navigate(['/admin/industry'])
    }
}