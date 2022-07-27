import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-organization-company-create",
    templateUrl: "./admin-organization-company-create.component.html"
})
export class AdminOrganizationCompanyCreateComponent {

    constructor(
        private router: Router
    ) { }

    goTo() {
        this.router.navigate(['/admin/organization/company'])
    }
}