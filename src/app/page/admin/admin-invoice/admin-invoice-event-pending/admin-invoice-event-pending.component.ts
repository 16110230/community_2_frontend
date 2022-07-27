import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-admin-invoice-event-pending",
    templateUrl: "./admin-invoice-event-pending.component.html"
})
export class AdminInvoiceEventPendingComponent {
    invoices = [
        {
            id: 1234,
            username: "jaka sugih",
            orderDate: "2022-07-25",
            amount: 40000,
            file: "foto.jpg"
        },
        {
            id: 1235,
            username: "Putrimalu",
            orderDate: "2022-07-25",
            amount: 40000,
            file: "foto.jpg"
        },
        {
            id: 1236,
            username: "tombokun",
            orderDate: "2022-07-25",
            amount: 40000,
            file: "foto.jpg"
        }
    ]


}