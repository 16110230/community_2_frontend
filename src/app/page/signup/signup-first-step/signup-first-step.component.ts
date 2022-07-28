import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { PersonalInfo } from "src/app/model/register/personal-info";
import { addPersonal } from "src/app/state/app.action";

@Component({
    selector: 'app-signup-st',
    templateUrl: './signup-first-step.component.html'
})
export class SignupFirstStepComponent {
    username : string = ''
    fullName : string = ''
    userPassword : string = ''
    email : string = ''

    data : PersonalInfo = new PersonalInfo()

    constructor(private store : Store, private router : Router) {}

    submit = () : void => {
        this.data.username = this.username
        this.data.fullName = this.fullName
        this.data.email = this.email
        this.data.userPassword = this.userPassword

        this.store.dispatch(addPersonal({ payload: this.data }))

        this.router.navigateByUrl('/signup/detail')
    }
}