import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService, LazyLoadEvent } from "primeng/api";
import { Subscription } from "rxjs";
import { ShowSubsCategories } from "src/app/dto/subs-category/show-subs-categories";
import { SubsCategoryService } from "src/app/service/subs-category.service";

@Component({
    selector: "app-subscription-category",
    templateUrl: "./admin-subscription-category.component.html",
    providers : [
        ConfirmationService
    ]
})
export class AdminSubscriptionCategoryComponent implements OnDestroy {
    constructor(
        private confirmationService: ConfirmationService,
        private subsCategoryService: SubsCategoryService,
        private router: Router
    ) { }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string
    isLoading : boolean = false

    subsCategories: ShowSubsCategories = {} as ShowSubsCategories
    subscriptionCategoriesSub?: Subscription
    deleteSubs?: Subscription
    isDeleted!: number

    initData(): void {
        this.subsCategoryService.getAllWithPagination(this.startPage, this.maxPage, this.query).subscribe(result => {
            this.subsCategories = result
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

        this.subscriptionCategoriesSub = this.subsCategoryService.getAllWithPagination(startPage, maxPage, query).subscribe(
            result => {
                const resultData: any = result
                this.subsCategories.data = resultData.data
                this.loading = false
                this.totalData = resultData.count
            },
        )
    }

    goTo() {
        this.router.navigate(['/admin/subscription-category/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/subscription-category/update/${id}`])
    }

    onDelete(id: number) {
        this.isDeleted = id
    }

    deleted(): void {
        this.isLoading = true
        this.deleteSubs = this.subsCategoryService
            .delete(this.isDeleted)
            .subscribe(result => {
                if(this.maxPage != 5) this.initData()
                else this.getData(this.startPage, this.maxPage, this.query)
                this.isLoading = false
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
        this.subscriptionCategoriesSub?.unsubscribe()
    }
}