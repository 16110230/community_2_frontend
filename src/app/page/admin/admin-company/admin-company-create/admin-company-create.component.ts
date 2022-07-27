import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-company-create",
    templateUrl: "./admin-company-create.component.html"
})
export class AdminCompanyCreateComponent {

    constructor(
        private router: Router
    ) { }

    goTo() {
        this.router.navigate(['/admin/company'])
    }
}