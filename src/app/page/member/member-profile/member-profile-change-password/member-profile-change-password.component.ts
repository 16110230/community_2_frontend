import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UpdatePasswordReq } from "src/app/dto/users/update-password-req";
import { UsersService } from "src/app/service/users.service";

@Component({
    selector: "app-member-profile-change-password",
    templateUrl: "./member-profile-change-password.component.html",
    styleUrls: ['../../home/home.component.css']
})

export class MemberProfileChangePassword {
    inputType : string = 'password'

    confirmNewPassword : string = ''

    data : UpdatePasswordReq = {
        oldPassword : '',
        newPassword : ''
    }

    constructor(
        private router: Router,
        private userService : UsersService
    ) { }

    goToEditProfile() {
        this.router.navigate(['/home/profiles/edit'])
    }

    goToChangePassword() {
        this.router.navigate(['/home/profiles/change-password'])
    }

    show = () : void => {
        if(this.inputType === 'password') this.inputType = 'text'
        else this.inputType = 'password'
    }

    submit = () : void => {
        if(this.confirmNewPassword === this.data.newPassword) {
            this.userService.changePassword(this.data).subscribe(res => { this.router.navigateByUrl('/home/profiles') })
        }
    }
}