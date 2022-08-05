import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { Subscription } from "rxjs";
import { ShowCompanies } from "../../../../dto/company/show-companies";
import { CompanyService } from "../../../../service/company.service";

@Component({
    selector: "app-admin-company",
    templateUrl: "./admin-company.component.html",
    providers: [
        ConfirmationService
    ]
})

export class AdminCompanyComponent implements OnDestroy {

    constructor(
        private companyService: CompanyService,
        private confirmationService: ConfirmationService,
        private router: Router
    ) { }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string

    companies: ShowCompanies = {} as ShowCompanies
    companiesSub?: Subscription
    deleteSubscription?: Subscription
    isDeleted!: number;

    initData() {
        this.companyService.getAllWithPagination(this.startPage, this.maxPage, this.query).subscribe(result => {
            this.companies = result
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

        this.companiesSub = this.companyService.getAllWithPagination(startPage, maxPage, query).subscribe(
            result => {
                const resultData: any = result
                this.companies.data = resultData.data
                this.loading = false
                this.totalData = resultData.count
            },
        )
    }

    goTo() {
        this.router.navigate(['/admin/company/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/company/update/${id}`])
    }

    onDelete(id: number): void {
        this.isDeleted = id;
    }

    deleted(): void {
        this.deleteSubscription = this.companyService
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
        this.companiesSub?.unsubscribe()
        this.deleteSubscription?.unsubscribe()
    }
}