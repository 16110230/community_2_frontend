import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { COURSE } from "src/app/constant/constant";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { ShowActivityInvoices } from "src/app/dto/activity-invoice/show-activity-invoices";
import { ActivityInvoiceService } from "src/app/service/activity-invoice.service";

@Component({
    selector: "app-admin-invoice-course",
    templateUrl: "./admin-invoice-course.component.html"
})
export class AdminInvoiceCourseComponent implements OnDestroy {
    constructor(private activityInvoiceService: ActivityInvoiceService) { }

    invoices: ShowActivityInvoices = {
        data: []
    }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string
    invoiceSubs?: Subscription

    initData(): void {
        this.activityInvoiceService.getAllByType(this.startPage, this.maxPage, COURSE).subscribe(result => {
            this.invoices = result
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

        this.invoiceSubs = this.activityInvoiceService.getAllByType(startPage, maxPage, COURSE).subscribe(
            result => {
                const resultData: any = result
                this.invoices.data = resultData.data
                this.loading = false
                this.totalData = resultData.countData
            },
        )
    }

    ngOnInit(): void {
        // this.initData()
    }

    ngOnDestroy(): void {
        this.invoiceSubs?.unsubscribe()
    }
}