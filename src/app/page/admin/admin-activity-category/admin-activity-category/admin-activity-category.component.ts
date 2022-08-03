import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { Subscription } from "rxjs";
import { ShowActivityCategories } from "src/app/dto/activity-category/show-activity-categories";
import { ActivityCategoryService } from "src/app/service/activity-category.service";

@Component({
    selector: "app-admin-activity-category",
    templateUrl: "./admin-activity-category.component.html",
    providers: [
        ConfirmationService
    ]
})
export class AdminActivityCategory implements OnDestroy {

    constructor(
        private confirmationService: ConfirmationService,
        private activityCategoryService: ActivityCategoryService,
        private router: Router
    ) { }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string

    activityCategories: ShowActivityCategories = {} as ShowActivityCategories
    activityCategoriesSub?: Subscription
    deleteSubs?: Subscription
    isDeleted!: number

    initData(): void {
        this.activityCategoryService.getAll(this.startPage, this.maxPage, this.query).subscribe(result => {
            this.activityCategories = result
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

        this.activityCategoriesSub = this.activityCategoryService.getAll(startPage, maxPage, query).subscribe(
            result => {
                const resultData: any = result
                this.activityCategories.data = resultData.data
                this.loading = false
                this.totalData = resultData.total
                console.log(resultData)
            },
        )
    }

    goTo() {
        this.router.navigate(['admin/activity-category/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/activity-category/update/${id}`])
    }

    onDelete(id: number): void {
        this.isDeleted = id;
    }

    deleted(): void {
        this.deleteSubs = this.activityCategoryService
            .delete(this.isDeleted)
            .subscribe((_) => {
                this.initData();
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

    ngOnDestroy() {
        this.activityCategoriesSub?.unsubscribe()
        this.deleteSubs?.unsubscribe
    }
}