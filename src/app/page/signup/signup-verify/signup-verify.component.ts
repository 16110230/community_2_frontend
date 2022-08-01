import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { InsertUserReq } from "src/app/dto/users/insert-user-req";
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
        if(this.code !== this.codeRes) {
            this.register.verificationCode = this.code
            this.userService.insert(this.register).subscribe(res => this.router.navigateByUrl('/login'))
        }
    }
}