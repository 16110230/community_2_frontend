import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { Subscription } from "rxjs";
import { ShowActivityTypes } from "src/app/dto/activity-type/show-activity-types";
import { ActivityTypeService } from "src/app/service/activity-type.service";

@Component({
    selector: "app-admin-activity-type",
    templateUrl: "./admin-activity-type.component.html",
    providers: [
        ConfirmationService
    ]
})
export class AdminActivityType implements OnDestroy {

    constructor(
        private confirmationService: ConfirmationService,
        private activityTypeService: ActivityTypeService,
        private router: Router
    ) { }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string
    isLoading : boolean = false

    activityTypes: ShowActivityTypes = {} as ShowActivityTypes
    activityTypesSub?: Subscription
    deleteSubs?: Subscription
    isDeleted!: number

    initData(): void {
        this.activityTypeService.getAllWithPagination(this.startPage, this.maxPage, this.query).subscribe(result => {
            this.activityTypes = result
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

        this.activityTypesSub = this.activityTypeService.getAllWithPagination(startPage, maxPage, query).subscribe(
            result => {
                const resultData: any = result
                this.activityTypes.data = resultData.data
                this.loading = false
                this.totalData = resultData.count
            },
        )
    }

    ngOnDestroy(): void {
        this.activityTypesSub?.unsubscribe()
        this.deleteSubs?.unsubscribe()
    }

    goTo() {
        this.router.navigate(['admin/activity-type/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/activity-type/update/${id}`])
    }

    onDelete(id: number): void {
        this.isDeleted = id;
    }

    deleted(): void {
        this.deleteSubs = this.activityTypeService
            .delete(this.isDeleted)
            .subscribe((_) => {
                if(this.maxPage != 5) this.initData()
                else this.getData(this.startPage, this.maxPage, this.query)
                this.isLoading = false
            });
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
}