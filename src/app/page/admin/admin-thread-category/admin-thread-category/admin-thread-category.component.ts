import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { Subscription } from "rxjs";
import { ShowThreadCategories } from "src/app/dto/thread-category/show-thread-categories";
import { ThreadCategoryService } from "src/app/service/thread-category.service";

@Component({
    selector: "app-thread-category-company",
    templateUrl: "./admin-thread-category.component.html",
    providers: [
        ConfirmationService
    ]
})

export class AdminThreadCategoryComponent implements OnDestroy {

    constructor(
        private confirmationService: ConfirmationService,
        private threadCategoryService: ThreadCategoryService,
        private router: Router
    ) { }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string

    threadCategories: ShowThreadCategories = {} as ShowThreadCategories
    threadCategoriesSub?: Subscription
    deleteSubs?: Subscription
    isDeleted!: number

    initData(): void {
        this.threadCategoryService.getAllWithPagination(this.startPage, this.maxPage, this.query).subscribe(result => {
            this.threadCategories = result
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

        this.threadCategoriesSub = this.threadCategoryService.getAllWithPagination(startPage, maxPage, query).subscribe(
            result => {
                const resultData: any = result
                this.threadCategories.data = resultData.data
                this.loading = false
                this.totalData = resultData.count
            },
        )
    }

    goTo() {
        this.router.navigate(['/admin/thread-category/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/thread-category/update/${id}`])
    }

    onDelete(id: number) {
        this.isDeleted = id
    }

    deleted(): void {
        this.deleteSubs = this.threadCategoryService
            .delete(this.isDeleted)
            .subscribe(result => {
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
        this.threadCategoriesSub?.unsubscribe()
    }
}