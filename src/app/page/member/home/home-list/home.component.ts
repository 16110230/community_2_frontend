import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { BOOKMARK, LIKE } from "src/app/constant/constant";
import { InsertThreadActivityReq } from "src/app/dto/thread-activity/insert-thread-activity-req";
import { ShowThreads } from "src/app/dto/thread/show-threads";
import { ThreadDto } from "src/app/dto/thread/thread-dto";
import { ThreadActivityService } from "src/app/service/thread-activity.service";
import { ThreadService } from "src/app/service/thread.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['../home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    threads: ShowThreads = {} as ShowThreads
    threadsData: ThreadDto[] = []
    articles: ShowThreads = {} as ShowThreads
    articlesData: ThreadDto[] = []
    insert: InsertThreadActivityReq = {
        thread: "",
        threadActivityCategory: "",
        isActive: true
    }
    subs?: Subscription
    startPage: number = 0
    maxPage: number = 3

    constructor(
        private threadService: ThreadService,
        private threadActivityServcie: ThreadActivityService,
        private router: Router
    ) { }

    initData(startPage: number, maxPage: number): void {
        this.threadService.getAll().subscribe((result) => { //ganti pake get all user untuk infinite scroll
            this.threads = result
            this.threadsData = result.data
            console.log(this.threadsData)
        })
        this.threadService.getAllArticles().subscribe((result) => {
            this.articles = result
            this.articlesData = result.data
        })
    }

    like(data: string): void {
        this.insert.thread = data
        this.insert.threadActivityCategory = LIKE
        this.threadActivityServcie.insert(
            this.insert
        ).subscribe(result => {
            this.initData(this.startPage, this.maxPage)
        })
    }

    unlike(data: string): void {
        this.insert.thread = data
        this.insert.threadActivityCategory = LIKE
        this.threadActivityServcie.deleteByThreadId(
            this.insert
        ).subscribe(result => {
            this.initData(this.startPage, this.maxPage)
        })
    }

    bookmark(data: string): void {
        this.insert.thread = data
        this.insert.threadActivityCategory = BOOKMARK
        this.threadActivityServcie.insert(
            this.insert
        ).subscribe(result => {
            this.initData(this.startPage, this.maxPage)
        })
    }

    unBookmark(data: string): void {
        this.insert.thread = data
        this.insert.threadActivityCategory = BOOKMARK
        this.threadActivityServcie.deleteByThreadId(
            this.insert
        ).subscribe(result => {
            this.initData(this.startPage, this.maxPage)
        })
    }

    trimChar(data: string): string {
        let result: string = data.substr(0, 120) + "...";
        return result;
    }

    trimCharSubs(data: string): string {
        let result: string = data.substr(0, 200) + "...";
        return result;
    }

    toDetail(id: string) {
        this.router.navigate([`/member/thread-detail/${id}`])
    }

    ngOnInit(): void {
        this.initData(this.startPage, this.maxPage)
    }
    ngOnDestroy(): void {

    }
    onScroll(): void {
        this.initData(this.startPage, this.maxPage)
        this.maxPage += this.maxPage
    }


}
