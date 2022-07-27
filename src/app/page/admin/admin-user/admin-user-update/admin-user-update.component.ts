import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-user-update",
    templateUrl: "./admin-user-update.component.html"
})

export class AdminUserUpdateComponent {

    user = {
        id: 1,
        fullName: "Jaka Sugih",
        username: "jakasugih123",
        email: "jaka.sugih@mail.com",
        companyName: "PT. Lawencon International",
        industryName: "Technology",
        positionName: "HR",
        isActive: true
    }


    constructor(
        private router: Router
    ) { }

    goTo() {
        this.router.navigate(['/admin/user'])
    }
}