import { Component } from "@angular/core";

@Component({
    selector: "app-admin-invoice-course-pending",
    templateUrl: "./admin-invoice-course-pending.component.html"
})
export class AdminInvoiceCoursePendingComponent {
    imageSource = ""
    imageViewFull = false
    invoices = [
        {
            id: 1234,
            username: "jaka sugih",
            orderDate: "2022-07-25",
            amount: 40000,
            file: "../../../../../assets/img/Screenshot_2018_11_22_20_41_14_33.jpg"
        },
        {
            id: 1235,
            username: "Putrimalu",
            orderDate: "2022-07-25",
            amount: 40000,
            file: "../../../../../assets/img/Screenshot_2018_11_22_20_41_14_33.jpg"
        },
        {
            id: 1236,
            username: "tombokun",
            orderDate: "2022-07-25",
            amount: 40000,
            file: "../../../../../assets/img/Screenshot_2018_11_22_20_41_14_33.jpg"
        }
    ]

    viewImage(src: string) {
        this.imageViewFull = !this.imageViewFull
        this.imageSource = src
    }

    closeViewImage() {
        this.imageSource = ""
        this.imageViewFull = !this.imageViewFull
    }
}