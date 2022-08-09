import { Component, OnDestroy, OnInit } from "@angular/core";
import { ShowSubscriptions } from "src/app/dto/subscription/show-subscriptions";
import { UpdateSubscriptionReq } from "src/app/dto/subscription/update-subscription-req";
import { SubscriptionService } from "src/app/service/subscription.service";

@Component({
    selector: "app-admin-invoice-subscribe-pending",
    templateUrl: "./admin-invoice-subscribe-pending.component.html"
})
export class AdminInvoiceSubscribePendingComponent implements OnInit {
    constructor(private subscriptionService : SubscriptionService) {}

    imageSource = ""
    imageViewFull = false
    subscriptions : ShowSubscriptions = {
        data : []
    }

    update : UpdateSubscriptionReq = {
        id : "",
        isApproved : false,
        subscriptionCategory : "",
        version : 0,
        isActive : false,
    }

    idParam! : string

    initData() : void {
        this.subscriptionService.getAll().subscribe(result => {
            this.subscriptions = result
        })
    }

    ngOnInit(): void {
        this.initData()
    }

    onValidate(id : string) : void {
        this.idParam = id

        this.subscriptionService.getById(this.idParam).subscribe(res => {
            
            this.update.id = id
            this.update.isApproved = true
            this.update.isActive = res.data.isActive
            this.update.version = res.data.version

            this.subscriptionService.update(this.update).subscribe(result => {
                this.initData()
            })
        })
    }

    onRejected(id : string) : void {
        this.idParam = id

        this.subscriptionService.getById(this.idParam).subscribe(res => {
            
            this.update.id = id
            this.update.isApproved = false
            this.update.isActive = res.data.isActive
            this.update.version = res.data.version

            this.subscriptionService.update(this.update).subscribe(result => {
                this.initData()
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

}