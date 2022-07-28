import { Component } from "@angular/core";

@Component({
    selector: "app-admin-invoice-course",
    templateUrl: "./admin-invoice-course.component.html"
})
export class AdminInvoiceCourseComponent {
    invoices = [
        {
            id: 1234,
            username: "jaka sugih",
            orderDate: "2022-07-25",
            amount: 40000,
            file: "foto.jpg",
            isApproved: true
        },
        {
            id: 1235,
            username: "Putrimalu",
            orderDate: "2022-07-25",
            amount: 40000,
            file: "foto.jpg",
            isApproved: false
        },
        {
            id: 1236,
            username: "tombokun",
            orderDate: "2022-07-25",
            amount: 40000,
            file: "foto.jpg",
            isApproved: true
        }
    ]
}