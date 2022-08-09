import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LazyLoadEvent } from "primeng/api";
import { Subscription } from "rxjs";
import { ShowSubsCategories } from "src/app/dto/subs-category/show-subs-categories";
import { SubsCategoryService } from "src/app/service/subs-category.service";

@Component({
    selector: "app-member-subscribtion",
    templateUrl: "./subscription.component.html",
    styleUrls: ["../subscription.style.css"]
})
export class SubscriptionComponent implements OnInit, OnDestroy {
    constructor(private subsCategoryService : SubsCategoryService, private router : Router) {}

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string

    subsCategories: ShowSubsCategories = {} as ShowSubsCategories
    subscriptionCategoriesSub?: Subscription

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

    ngOnInit(): void {
        this.initData()
    }

    ngOnDestroy(): void {
        this.subscriptionCategoriesSub?.unsubscribe()
    }

    convert(duration : number) : string {
        let result : string

        if (duration < 365) {
            return result = `${duration/30} Month` 
        } else {
            const year : number = duration/365
            return result = `${year} Year`
        }
    }

    onById(id : string) : void {
        this.router.navigateByUrl(`/home/subscriptions/details/${id}`)
    }
}