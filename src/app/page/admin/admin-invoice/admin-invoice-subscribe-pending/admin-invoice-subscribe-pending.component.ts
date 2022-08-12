import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { ShowSubscriptions } from "src/app/dto/subscription/show-subscriptions";
import { UpdateSubscriptionReq } from "src/app/dto/subscription/update-subscription-req";
import { SubscriptionService } from "src/app/service/subscription.service";

@Component({
    selector: "app-admin-invoice-subscribe-pending",
    templateUrl: "./admin-invoice-subscribe-pending.component.html"
})
export class AdminInvoiceSubscribePendingComponent implements OnDestroy {
    constructor(
        private subscriptionService: SubscriptionService
    ) { }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string

    subscriptions: ShowSubscriptions = {} as ShowSubscriptions
    subscribeSub?: Subscription

    imageSource = ""
    imageViewFull = false

    update: UpdateSubscriptionReq = {
        id: "",
        isApproved: false,
        subscriptionCategory: "",
        version: 0,
        isActive: false,
    }

    idParam!: string
    updateSub?: Subscription

    initData(): void {
        this.loading = true
        this.subscribeSub = this.subscriptionService.getAllUnApproved(this.startPage, this.maxPage).subscribe(result => {
            const resultData: any = result
            this.subscriptions.data = result.data
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

        this.subscribeSub = this.subscriptionService.getAllUnApproved(startPage, maxPage).subscribe(
            result => {
                const resultData: any = result
                this.subscriptions.data = result.data
                this.totalData = resultData.countData
                this.loading = false
            },
        )
    }

    onValidate(id: string): void {
        this.idParam = id

        this.subscriptionService.getById(this.idParam).subscribe(res => {

            this.update.id = id
            this.update.isApproved = true
            this.update.isActive = res.data.isActive
            this.update.version = res.data.version
            this.update.subscriptionCategory = res.data.subscriptionCategory

            this.subscriptionService.update(this.update).subscribe(result => {
                if (this.maxPage != 5) this.initData()
                else this.getData(this.startPage, this.maxPage, this.query)
                this.loading = false
            })
        })
    }

    onRejected(id: string): void {
        this.idParam = id

        this.subscriptionService.getById(this.idParam).subscribe(res => {

            this.update.id = id
            this.update.isApproved = false
            this.update.isActive = res.data.isActive
            this.update.version = res.data.version
            this.update.subscriptionCategory = res.data.subscriptionCategory

            this.subscriptionService.update(this.update).subscribe(result => {
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

    }
}