import { Component } from "@angular/core";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html"
})

export class LoginComponent {
    loginReq = {
        username: "",
        password: ""
    }

    constructor() { }

    login(): void {

    }
}