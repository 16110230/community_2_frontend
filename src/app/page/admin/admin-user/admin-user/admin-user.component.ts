import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-user",
    templateUrl: "./admin-user.component.html"
})
export class AdminUserComponents {
    usersData = [
        {
            id: 1,
            fullName: "Jaka Sugih",
            username: "jakasugih",
            email: "jaka.sugih@mail.com",
            isActive: true
        },
        {
            id: 2,
            fullName: "Putri Malu",
            username: "putri.malu",
            email: "putri.m@mail.com",
            isActive: false
        }
    ]
    constructor(
        private router: Router
    ) { }

    editAt(id: number) {
        this.router.navigate([`/admin/user/${id}`])
    }
}