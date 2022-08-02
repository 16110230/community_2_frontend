import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ShowDashboard } from "src/app/dto/dashboard/show-dashboard";
import { ShowThreads } from "src/app/dto/thread/show-threads";
import { ThreadDto } from "src/app/dto/thread/thread-dto";
import { DashboardService } from "src/app/service/dashboard-service";

@Component({
    selector: "app-admin-dashboard",
    templateUrl: "./admin-dashboard.component.html"
})
export class AdminDashboardComponent implements OnInit, OnDestroy {
    targetId?= null

    dashboards: ShowDashboard = {
        data: {
            countUsers: 0,
            countDailyUsers: 0,
            countEvent: 0,
            countCourse: 0,
            countPendingEventInvoice: 0,
            countPendingCourseInvoice: 0,
            countPendingSubscribeInvoice: 0
        }
    }

    threads: ShowThreads = {} as ShowThreads

    dashboardSubscribe?: Subscription
    threadSubscribe?: Subscription

    cards = [
        {
            title: "",
            count: 0,
            icon: "pi pi-users",
            classCustom: "card-custom-1",
            dest: "nogo"
        }
    ]

    constructor(
        private router: Router,
        private dashboardService: DashboardService
    ) { }


    initData() {
        this.dashboardSubscribe = this.dashboardService.getAll().subscribe((result) => {
            this.dashboards = result

            this.cards = [
                {
                    title: "Total Users",
                    count: this.dashboards.data.countUsers,
                    icon: "pi pi-users",
                    classCustom: "card-custom-1",
                    dest: "nogo"
                },
                {
                    title: "Daily New User",
                    count: this.dashboards.data.countDailyUsers,
                    icon: "pi pi-user",
                    classCustom: "card-custom-1",
                    dest: "nogo"
                },
                {
                    title: "Daily New Event",
                    count: this.dashboards.data.countEvent,
                    icon: "pi pi-calendar",
                    classCustom: "card-custom-2",
                    dest: "nogo"
                },
                {
                    title: "Daily New Course",
                    count: this.dashboards.data.countCourse,
                    icon: "pi pi-calendar",
                    classCustom: "card-custom-2",
                    dest: "nogo"
                },
                {
                    title: "Pending Subscribe Invoice",
                    count: this.dashboards.data.countPendingSubscribeInvoice,
                    icon: "pi pi-align-justify",
                    classCustom: "card-custom-3",
                    dest: "/admin/invoice/subscribe/pending"
                },
                {
                    title: "Pending Event Invoice",
                    count: this.dashboards.data.countPendingEventInvoice,
                    icon: "pi pi-align-justify",
                    classCustom: "card-custom-3",
                    dest: "/admin/invoice/event/pending"
                },
                {
                    title: "Pending Course Invoice",
                    count: this.dashboards.data.countPendingCourseInvoice,
                    icon: "pi pi-align-justify",
                    classCustom: "card-custom-3",
                    dest: "/admin/invoice/course/pending"
                }
            ]
        })

        this.threadSubscribe = this.dashboardService.getAllThreads().subscribe((result) => {
            this.threads.data = result.data
        })


    }

    ngOnInit() {
        this.initData()
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

    ngOnDestroy() {
        this.dashboardSubscribe?.unsubscribe
    }
}