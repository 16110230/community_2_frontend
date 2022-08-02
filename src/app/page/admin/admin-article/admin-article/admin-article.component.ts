import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ShowThreads } from "../../../../dto/thread/show-threads";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';

import { ThreadService } from "../../../../service/thread.service";

@Component({
    selector: "app-admin-article",
    templateUrl: "./admin-article.component.html"
})
export class AdminArticleComponent implements OnDestroy {

    constructor(
        private threadService: ThreadService,
        private router: Router
    ) { }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string

    articles: ShowThreads = {} as ShowThreads;
    articlesSub?: Subscription

    initData() {
        this.threadService.getAll(0, 0).subscribe(result => {
            this.articles = result
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

        this.articlesSub = this.threadService.getAll(startPage, maxPage, query).subscribe(
            result => {
                const resultData: any = result
                this.articles.data = resultData.data
                this.loading = false
                this.totalData = resultData.total
                console.log(resultData)
            },
        )
    }

    goTo() {
        this.router.navigate(['admin/article/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/article/update/${id}`])
    }

    ngOnDestroy() {
        this.articlesSub?.unsubscribe()
    }
}