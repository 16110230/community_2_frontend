import { Component, OnDestroy, OnInit } from "@angular/core";
import { EVENT } from "src/app/constant/constant";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { ShowActivityInvoices } from "src/app/dto/activity-invoice/show-activity-invoices";
import { UpdateActivityInvoiceReq } from "src/app/dto/activity-invoice/update-activity-invoice-req";
import { ActivityInvoiceService } from "src/app/service/activity-invoice.service";
import { Subscription } from "rxjs";

@Component({
    selector: "app-admin-invoice-event-pending",
    templateUrl: "./admin-invoice-event-pending.component.html"
})
export class AdminInvoiceEventPendingComponent implements OnDestroy {
    constructor(
        private activityInvoiceService: ActivityInvoiceService
    ) { }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string

    invoices: ShowActivityInvoices = {} as ShowActivityInvoices
    invoiceSub?: Subscription

    imageSource = ""
    imageViewFull = false

    update: UpdateActivityInvoiceReq = {
        id: "",
        isApproved: false,
        version: 0
    }

    idParam!: string
    updateSub?: Subscription

    initData(): void {
        this.loading = true;
        this.activityInvoiceService.getAllByTypeAndUnApproved(this.startPage, this.maxPage, EVENT).subscribe(result => {
            const resultData: any = result
            this.invoices.data = result.data
            this.loading = false
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

        this.invoiceSub = this.activityInvoiceService.getAllByTypeAndUnApproved(startPage, maxPage, EVENT).subscribe(
            result => {
                const resultData: any = result
                this.invoices.data = resultData.data
                this.totalData = resultData.countData
                this.loading = false
            },
        )
    }

    onValidate(id: string): void {
        this.idParam = id

        this.updateSub = this.activityInvoiceService.getById(this.idParam).subscribe(res => {

            this.update.id = id
            this.update.isApproved = true
            this.update.isActive = res.data.isActive
            this.update.version = res.data.version

            this.activityInvoiceService.update(this.update).subscribe(result => {
                if (this.maxPage != 5) this.initData()
                else this.getData(this.startPage, this.maxPage, this.query)
                this.loading = false
            })
        })
    }

    onRejected(id: string): void {
        this.idParam = id

        this.updateSub = this.activityInvoiceService.getById(this.idParam).subscribe(res => {

            this.update.id = id
            this.update.isApproved = false
            this.update.isActive = res.data.isActive
            this.update.version = res.data.version

            this.activityInvoiceService.update(this.update).subscribe(result => {
                if (this.maxPage != 5) this.initData()
                else this.getData(this.startPage, this.maxPage, this.query)
                this.loading = false
            })
        })
    }

    viewImage(src: string) {
        this.imageViewFull = !this.imageViewFull
        this.imageSource = src
    }

    closeViewImage() {
        this.imageSource = ""
        this.imageViewFull = !this.imageViewFull
    }

    ngOnDestroy() {
        this.invoiceSub?.unsubscribe()
        this.updateSub?.unsubscribe()
    }
}