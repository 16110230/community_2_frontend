import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { EVENT } from "src/app/constant/constant";
import { ShowActivityInvoices } from "src/app/dto/activity-invoice/show-activity-invoices";
import { ActivityInvoiceService } from "src/app/service/activity-invoice.service";

@Component({
    selector: "app-admin-invoice-event",
    templateUrl: "./admin-invoice-event.component.html"
})
export class AdminInvoiceEventComponent implements OnInit, OnDestroy {
    constructor(private activityInvoiceService : ActivityInvoiceService) {}

    invoices : ShowActivityInvoices = {
        data : []
    }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string
    invoiceSubs? : Subscription

    initData() : void {
        this.activityInvoiceService.getAllByType(this.startPage, this.maxPage, EVENT).subscribe(result => {
            this.invoices = result
        })
    }

    ngOnInit(): void {
        this.initData()
    }

    getData(startPage: number = this.startPage, maxPage: number = this.maxPage): void {
        this.loading = true;
        this.startPage = startPage
        this.maxPage = maxPage

        this.invoiceSubs = this.activityInvoiceService.getAllByType(startPage, maxPage, EVENT).subscribe(
            result => {
                const resultData: any = result
                this.invoices.data = resultData.data
                this.loading = false
                this.totalData = resultData.countData
                console.log(result)
            },
        )
    }

    ngOnDestroy(): void {
        this.invoiceSubs?.unsubscribe()
    }

}