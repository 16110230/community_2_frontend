import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { Subscription } from "rxjs";
import { ShowThreads } from "../../../../dto/thread/show-threads";
import { ThreadService } from "../../../../service/thread.service";

@Component({
    selector: "app-admin-thread",
    templateUrl: "./admin-thread.component.html"
})
export class AdminThreadComponents implements OnDestroy {


    constructor(
        private threadService: ThreadService,
        private router: Router,
        private confirmationService: ConfirmationService
    ) { }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string

    threads: ShowThreads = {} as ShowThreads
    threadsSub?: Subscription
    deleteSubs?: Subscription
    isDeleted!: number

    initData(): void {
        this.threadService.getAll().subscribe(result => {
            this.threads = result
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

        this.threadsSub = this.threadService.getAllWithPagination(startPage, maxPage, query).subscribe(
            result => {
                const resultData: any = result
                this.threads.data = resultData.data
                this.loading = false
                this.totalData = resultData.count
            },
        )
    }

    goTo(id: number) {
        this.router.navigate([`/admin/thread/detail/${id}`])
    }

    pollingTo(id: string) {
        this.router.navigate([`/admin/thread/polling/${id}`])
    }

    onDelete(id: number): void {
        this.isDeleted = id
    }

    deleted(): void {
        this.deleteSubs = this.threadService
            .delete(this.isDeleted)
            .subscribe((_) => {
                this.initData()
            })
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

    ngOnDestroy() {
        this.threadsSub?.unsubscribe()
        this.deleteSubs?.unsubscribe()
    }
}