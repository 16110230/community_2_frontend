import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-company-update",
    templateUrl: "./admin-company-update.component.html"
})
export class AdminCompanyUpdateComponent {


    constructor(
        private router: Router
    ) { }

    goTo() {
        this.router.navigate(['/admin/company'])
    }
}