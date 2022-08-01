import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-member-profile-change-password",
    templateUrl: "./member-profile-change-password.component.html"
})

export class MemberProfileChangePassword {
    passwordReq = {
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    }

    constructor(
        private router: Router
    ) { }

    goToEditProfile() {
        this.router.navigate(['/member/profile/edit'])
    }

    goToChangePassword() {
        this.router.navigate(['/member/profile/change-password'])
    }
}