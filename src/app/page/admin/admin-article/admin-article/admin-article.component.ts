import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ShowThreads } from "../../../../dto/thread/show-threads";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';

import { ThreadService } from "../../../../service/thread.service";
import { ConfirmationService } from "primeng/api";

@Component({
    selector: "app-admin-article",
    templateUrl: "./admin-article.component.html",
    providers : [
        ConfirmationService
    ]
})
export class AdminArticleComponent implements OnDestroy {

    constructor(
        private threadService: ThreadService,
        private router: Router,
        private confirmationService : ConfirmationService
    ) { }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string
    isLoading : boolean = false
    deleteSubs?: Subscription
    isDeleted!: number

    articles: ShowThreads = {} as ShowThreads;
    articlesSub?: Subscription

    initData() {
        this.threadService.getAllThreadArticleWithPagination(this.startPage, this.maxPage, this.query).subscribe(result => {
            this.articles.data = result.data
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

        this.articlesSub = this.threadService.getAllThreadArticleWithPagination(startPage, maxPage, query).subscribe(
            result => {
                const resultData: any = result
                this.articles.data = resultData.data
                this.loading = false
                this.totalData = resultData.countData
            },
        )
    }

    goTo(id: string) {
        this.router.navigate([`/admin/article/detail/${id}`])
    }

    create() {
        this.router.navigate(['/admin/article/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/article/update/${id}`])
    }

    ngOnDestroy() {
        this.articlesSub?.unsubscribe()
    }

    onDelete(id: number): void {
        this.isDeleted = id;
    }

    deleted(): void {
        this.deleteSubs = this.threadService
            .delete(this.isDeleted)
            .subscribe(() => {
                if(this.maxPage != 5) this.initData()
                else this.getData(this.startPage, this.maxPage, this.query)
                this.isLoading = false
            });
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
}