import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { Subscription } from "rxjs";
import { ShowIndustries } from "src/app/dto/industry/show-industries";
import { IndustryService } from "src/app/service/industry.service";

@Component({
    selector: "app-admin-industry",
    templateUrl: "./admin-industry.component.html",
    providers: [
        ConfirmationService
    ]
})

export class AdminIndustryComponent implements OnDestroy {

    constructor(
        private confirmationService: ConfirmationService,
        private industryService: IndustryService,
        private router: Router
    ) { }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string

    industries: ShowIndustries = {} as ShowIndustries
    industriesSub?: Subscription
    deleteSubs?: Subscription
    isDeleted!: number

    initData(): void {
        this.industryService.getAll(this.startPage, this.maxPage, this.query).subscribe(result => {
            this.industries = result
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

        this.industriesSub = this.industryService.getAll(startPage, maxPage, query).subscribe(
            result => {
                const resultData: any = result
                this.industries.data = resultData.data
                this.loading = false
                this.totalData = resultData.total
                console.log(resultData)
            },
        )
    }

    goTo() {
        this.router.navigate(['/admin/industry/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/industry/update/${id}`])
    }

    onDelete(id: number): void {
        this.isDeleted = id
    }

    deleted(): void {
        this.deleteSubs = this.industryService
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
        this.industriesSub?.unsubscribe()
    }
}