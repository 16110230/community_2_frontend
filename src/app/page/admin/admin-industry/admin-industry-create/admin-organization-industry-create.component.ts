import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-organization-industry-create",
    templateUrl: "./admin-organization-industry-create.component.html"
})
export class AdminOrganizationIndustryCreateComponent {

    constructor(
        private router: Router
    ) { }

    goTo() {
        this.router.navigate(['/admin/organization/industry'])
    }
}