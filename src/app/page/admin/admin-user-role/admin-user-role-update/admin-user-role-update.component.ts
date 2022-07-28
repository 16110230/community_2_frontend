import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-user-role-update",
    templateUrl: "./admin-user-role-update.component.html"
})

export class AdminUserRoleUpdateComponent {

    constructor(
        private router: Router
    ) { }

    goTo() {
        this.router.navigate(['/admin/user-role'])
    }
}