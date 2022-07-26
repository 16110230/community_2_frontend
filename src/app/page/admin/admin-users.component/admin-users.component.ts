import { Component } from "@angular/core";

@Component({
    selector: "app-admin-users",
    templateUrl: "./admin-users.component.html"
})
export class AdminUsersComponents {
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
}