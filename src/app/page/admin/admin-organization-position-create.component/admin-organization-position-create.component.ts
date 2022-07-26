import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-organization-position-create",
    templateUrl: "./admin-organization-position-create.component.html"
})
export class AdminOrganizationPositionCreateComponent {

    constructor(
        private router: Router
    ) { }

    goTo() {
        this.router.navigate(['/admin/organization/position'])
    }
}