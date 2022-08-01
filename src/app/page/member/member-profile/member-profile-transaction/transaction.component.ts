import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-member-transaction",
    templateUrl: "./transaction.component.html"
})
export class MemberProfileTransactionComponent {

    invoices = [
        {
            id: 1234,
            activityName: "event",
            orderDate: "2022-07-25",
            amount: 40000,
            file: "foto.jpg",
            isApproved: true
        },
        {
            id: 1235,
            activityName: "event",
            orderDate: "2022-07-25",
            amount: 40000,
            file: "foto.jpg",
            isApproved: false
        },
        {
            id: 1236,
            activityName: "event",
            orderDate: "2022-07-25",
            amount: 40000,
            file: "foto.jpg",
            isApproved: false
        }
    ]
    constructor(
        private router: Router
    ) { }
    goToEditProfile() {
        this.router.navigate(['/member/profile/edit'])
    }
    goToTransaction() {
        this.router.navigate(['/member/profile/transaction'])
    }
    goToActivity() {
        this.router.navigate(['/member/profile/activity'])
    }
}