import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-member-profile-edit",
    templateUrl: "./member-profile-edit.component.html"
})
export class MemberProfileEditComponent {

    blankPhotoProfile = "../../../../assets/img/blank-profile.jpg"
    user = {
        id: 1,
        fullName: "Jaka Sugih",
        username: "jakasugih123",
        email: "jaka.sugih@mail.com",
        companyName: "PT. Lawencon International",
        company: 1,
        industryName: "Technology",
        industry: 1,
        positionName: "HR",
        position: 1,
        isActive: true,
        src: "../../../../assets/img/profile-1.jpg"
    }

    companys = [
        {
            id: 1,
            companyName: "PT. Lawencon International"
        },
        {
            id: 2,
            companyName: "PT. Asus"
        }
    ]

    industrys = [
        {
            id: 1,
            industryName: "Technology"
        },
        {
            id: 2,
            industryName: "Factory"
        }
    ]

    positions = [
        {
            id: 1,
            positionName: "HR"
        },
        {
            id: 2,
            positionName: "Programmer"
        }
    ]

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