import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ShowSubscriptions } from "src/app/dto/subscription/show-subscriptions";
import { SubscriptionService } from "src/app/service/subscription.service";

@Component({
    selector: "app-admin-invoice-subscribe",
    templateUrl: "./admin-invoice-subscribe.component.html"
})
export class AdminInvoiceSubscribeComponent implements OnInit, OnDestroy {
    constructor(private subscriptionService : SubscriptionService) {}

    subscription : ShowSubscriptions = {
        data : []
    }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string
    subscriptionSubs? : Subscription

    initData() : void {
        this.subscriptionService.getAllByValidate().subscribe(result => {
            this.subscription = result
        })
    }

    ngOnInit(): void {
        this.initData()
    }

    getData(startPage: number = this.startPage, maxPage: number = this.maxPage): void {
        this.loading = true;
        this.startPage = startPage
        this.maxPage = maxPage
    }

    ngOnDestroy(): void {
        this.subscriptionSubs?.unsubscribe()
    }


}