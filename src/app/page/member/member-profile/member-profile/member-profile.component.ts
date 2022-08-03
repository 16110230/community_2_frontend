import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-member-profiel",
    templateUrl: "./member-profile.component.html",
    styleUrls: ['../home.component.css']
})
export class MemberProfileComponent {

    constructor(
        private router: Router
    ) { }
    goToEditProfile() {
        this.router.navigate(['/member/profiles/edit'])
    }
    goToTransaction() {
        this.router.navigate(['/member/profiles/transaction'])
    }
    goToActivity() {
        this.router.navigate(['/member/profiles/activity'])
    }
}