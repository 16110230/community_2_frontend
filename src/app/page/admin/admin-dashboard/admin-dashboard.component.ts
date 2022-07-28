import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-dashboard",
    templateUrl: "./admin-dashboard.component.html"
})
export class AdminDashboardComponent implements OnInit {
    targetId?= null

    threads = [
        {
            id: 1,
            threadTitle: "new title",
            threadCategory: "cat"
        },
        {
            id: 2,
            threadTitle: "new title 2",
            threadCategory: "cat"
        }
    ]

    cards = [
        {
            title: "Total Users",
            count: 304,
            icon: "pi pi-users",
            classCustom: "card-custom-1",
            dest: "nogo"
        },
        {
            title: "Daily New User",
            count: 17,
            icon: "pi pi-user",
            classCustom: "card-custom-1",
            dest: "nogo"
        },
        {
            title: "Daily New Event",
            count: 4,
            icon: "pi pi-calendar",
            classCustom: "card-custom-2",
            dest: "nogo"
        },
        {
            title: "Daily New Course",
            count: 3,
            icon: "pi pi-calendar",
            classCustom: "card-custom-2",
            dest: "nogo"
        },
        {
            title: "Pending Subscribe Invoice",
            count: 13,
            icon: "pi pi-align-justify",
            classCustom: "card-custom-3",
            dest: "/admin/invoice/subscribe/pending"
        },
        {
            title: "Pending Event Invoice",
            count: 24,
            icon: "pi pi-align-justify",
            classCustom: "card-custom-3",
            dest: "/admin/invoice/event/pending"
        },
        {
            title: "Pending Course Invoice",
            count: 20,
            icon: "pi pi-align-justify",
            classCustom: "card-custom-3",
            dest: "/admin/invoice/course/pending"
        }
    ]

    constructor(private router: Router) { }


    ngOnInit() {

    }

    cardGoTo(dest: string) {
        if (dest !== "nogo") { this.router.navigate([dest]) }

    }

    targetDelete(id: any): void {
        this.targetId = id
    }

    executeDelete(): void {
        // this.deleteSubscribe = this.employeeService.delete(this.targetId)
        //     .subscribe(result => {
        //         this.targetId = null
        //         this.showData()
        //     })
    }
}