import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { InsertUserReq } from "src/app/dto/users/insert-user-req";
import { VerificationReqDto } from "src/app/dto/verification-req-dto";
import { UsersService } from "src/app/service/users.service";
import { getAccount, getCode, getPersonal } from "src/app/state/app.selector";

@Component({
    selector: 'app-signup-last',
    templateUrl: './signup-verify.component.html'
})
export class SignupVerifyComponent implements OnInit {
    constructor(private store : Store, private userService : UsersService, private router : Router) {}

    register : InsertUserReq = {
        fullName: '',
        username: '',
        email: '',
        verificationCode: '',
        userPassword: '',
        company : '',
        position: '',
        industry: '',
    }

    request : VerificationReqDto = {
        email : '',
        code : ''
    }

    code : string = ''
    codeRes : string = ''

    ngOnInit(): void {
        this.store.select(getCode)
            .subscribe(res => { this.codeRes = res })

        this.store.select(getPersonal)
            .subscribe(res => {
                this.register.fullName = res.fullName
                this.register.username = res.username
                this.register.email = res.email
                this.register.userPassword = res.userPassword
            })

        this.store.select(getAccount)
            .subscribe(res => {
                this.register.company = res.company
                this.register.industry = res.industry
                this.register.position = res.position
            })
    }

    submit = () : void => {
        this.request.code = this.code
        this.request.email = this.register.email

        this.userService.verification(this.request).subscribe(res => {
            this.userService.insert(this.register).subscribe(response => this.router.navigateByUrl('/login'))
        })
    }
}