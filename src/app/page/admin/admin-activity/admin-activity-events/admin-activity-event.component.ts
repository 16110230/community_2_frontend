import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { Subscription } from "rxjs";
import { EVENT } from "src/app/constant/constant";
import { ShowActivities } from "src/app/dto/activity/show-activities";
import { ActivityService } from "src/app/service/activity.service";

@Component({
    selector: "app-admin-activity-event",
    templateUrl: "./admin-activity-event.component.html",
    providers: [
        ConfirmationService
    ]
})
export class AdminActivityEventComponent {

    constructor(
        private confirmationService: ConfirmationService,
        private activityService: ActivityService,
        private router: Router
    ) { }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string

    activities: ShowActivities = {} as ShowActivities
    activitiesSub?: Subscription
    deleteSubs?: Subscription
    isDeleted!: number

    initData(): void {
        this.activityService.getAllWithPagination(this.startPage, this.maxPage, this.query, EVENT).subscribe(result => {
            this.activities = result
        })
    }

    loadData(event: LazyLoadEvent) {
        this.getData(event.first, event.rows, event.globalFilter)
    }

    getData(startPage: number = this.startPage, maxPage: number = this.maxPage, query?: string): void {
        this.loading = true;
        this.startPage = startPage
        this.maxPage = maxPage
        this.query = query

        this.activitiesSub = this.activityService.getAllWithPagination(startPage, maxPage, query, EVENT).subscribe(
            result => {
                const resultData: any = result
                this.activities.data = resultData.data
                this.loading = false
                this.totalData = resultData.countData
                console.log(result)
            },
        )
    }

    onDelete(id: number): void {
        this.isDeleted = id
    }

    deleted(): void {
        this.deleteSubs = this.activityService
            .delete(this.isDeleted)
            .subscribe((_) => {
                this.initData()
            })
    }

    confirm(id: number) {
        this.isDeleted = id
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.deleted()
            }
        });
    }

    ngOnDestroy() {
        this.activitiesSub?.unsubscribe()
        this.deleteSubs?.unsubscribe()
    }
}