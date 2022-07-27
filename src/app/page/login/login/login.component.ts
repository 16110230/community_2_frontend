import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { LoginReqDto } from "src/app/dto/login-req-dto";
import { LoginService } from "src/app/service/login.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html"
})

export class LoginComponent implements OnDestroy {
    loginReq : LoginReqDto = {
        username: "",
        userPassword: ""
    }

    loginSubscription?: Subscription

    constructor(private loginService : LoginService, private router : Router){}

    login(): void{
        this.loginSubscription = this.loginService.login(this.loginReq)
            .subscribe(result => {
                this.loginService.saveData(result)
                this.router.navigateByUrl("/admin")
            })
    }

    ngOnDestroy(): void {
        this.loginSubscription?.unsubscribe()
    }
}