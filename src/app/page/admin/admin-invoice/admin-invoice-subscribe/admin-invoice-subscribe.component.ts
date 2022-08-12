import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { ShowSubscriptions } from "src/app/dto/subscription/show-subscriptions";
import { SubscriptionService } from "src/app/service/subscription.service";

@Component({
    selector: "app-admin-invoice-subscribe",
    templateUrl: "./admin-invoice-subscribe.component.html"
})

export class AdminInvoiceSubscribeComponent implements OnInit, OnDestroy {
    constructor(private subscriptionService: SubscriptionService) { }

    subscription: ShowSubscriptions = {
        data: []
    }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string
    subscriptionSubs?: Subscription

    initData(): void {
        this.subscriptionService.getAllApproved(this.startPage, this.maxPage).subscribe(result => {
            this.subscription = result
        })
    }

    ngOnInit(): void {
        // this.initData()
    }

    loadData(event: LazyLoadEvent) {
        this.getData(event.first, event.rows, event.globalFilter)
    }

    getData(startPage: number = this.startPage, maxPage: number = this.maxPage, query?: string): void {
        this.loading = true;
        this.startPage = startPage
        this.maxPage = maxPage

        this.subscriptionSubs = this.subscriptionService.getAllApproved(this.startPage, this.maxPage).subscribe(
            result => {
                const resultData: any = result
                this.subscription.data = result.data
                this.loading = false
                this.totalData = resultData.countData
            })
    }

    ngOnDestroy(): void {
        this.subscriptionSubs?.unsubscribe()
    }


}