import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { BOOKMARK, LIKE, POLLING, PREMIUM, REGULAR } from "src/app/constant/constant";
import { InsertThreadActivityReq } from "src/app/dto/thread-activity/insert-thread-activity-req";
import { ShowThreads } from "src/app/dto/thread/show-threads";
import { ThreadDto } from "src/app/dto/thread/thread-dto";
import { InsertUserPollingReq } from "src/app/dto/user-polling/insert-user-polling";
import { LoginService } from "src/app/service/login.service";
import { ThreadActivityService } from "src/app/service/thread-activity.service";
import { ThreadService } from "src/app/service/thread.service";
import { UserPollingService } from "src/app/service/user-polling.service";

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
    premium: string = PREMIUM
    reguler: string = REGULAR
    polling: string = POLLING
    buttonDis: boolean = false
    data: any = this.loginService.getData()
    token?: string = ""
    isPremium: boolean = false
    isLogin: boolean = false
    isClear: boolean = false

    insert: InsertThreadActivityReq = {
        thread: "",
        threadActivityCategory: "",
        isActive: true
    }

    insertPolling: InsertUserPollingReq = {
        pollingDetails: ""
    }

    subs?: Subscription
    startPage: number = 0
    maxPage: number = 5
    imageSource: string = ''
    imageViewFull: boolean = false
    query: string = ''
    isSkeleton: boolean = false

    constructor(
        private threadService: ThreadService,
        private threadActivityServcie: ThreadActivityService,
        private userPollingService: UserPollingService,
        private loginService: LoginService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.isSkeleton = true

        setTimeout(() => {
            if (this.loginService.getData()) {
                this.token = this.data.data.token
                this.isPremium = this.data.data.prem
                this.isLogin = true
            }
            this.initData(this.startPage, this.maxPage, this.query)
            this.isSkeleton = false
        }, 1000)
    }

    ngOnDestroy(): void {
        this.subs?.unsubscribe()
    }

    initData(startPage: number, maxPage: number, query: string): void {
        if (this.loginService.getData()) {
            this.token = this.data.data.token
            this.threadService.getAllUser(startPage, maxPage, query).subscribe((result) => {
                this.threads = result
                this.threadsData = result.data
                this.isSkeleton = false
            })
        } else {
            this.threadService.getAllNoLogin(startPage, maxPage, query).subscribe((result) => {
                this.threads = result
                this.threadsData = result.data
                this.isSkeleton = false
            })
        }
        this.threadService.getAllArticles().subscribe((result) => {
            this.articles = result
            this.articlesData = result.data
        })
    }

    like(data: string): void {
        this.insert.thread = data
        this.insert.threadActivityCategory = LIKE

        if (this.isLogin) {
            this.threadActivityServcie.insert(
                this.insert
            ).subscribe(result => {
                this.initData(this.startPage, this.maxPage, this.query)
            })
        }
    }

    unlike(data: string): void {
        this.insert.thread = data
        this.insert.threadActivityCategory = LIKE

        if (this.isLogin) {
            this.threadActivityServcie.deleteByThreadId(
                this.insert
            ).subscribe(result => {
                this.initData(this.startPage, this.maxPage, this.query)
            })
        }
    }

    bookmark(data: string): void {
        this.insert.thread = data
        this.insert.threadActivityCategory = BOOKMARK

        if (this.isLogin) {
            this.threadActivityServcie.insert(
                this.insert
            ).subscribe(result => {
                this.initData(this.startPage, this.maxPage, this.query)
            })
        }
    }

    unBookmark(data: string): void {
        this.insert.thread = data
        this.insert.threadActivityCategory = BOOKMARK

        if (this.isLogin) {
            this.threadActivityServcie.deleteByThreadId(
                this.insert
            ).subscribe(result => {
                this.initData(this.startPage, this.maxPage, this.query)
            })
        }
    }

    insertPol(childId: any): void {
        this.insertPolling.pollingDetails = childId
        console.log(childId);

        this.userPollingService.insert(
            this.insertPolling
        ).subscribe(result => {
            this.initData(this.startPage, this.maxPage, this.query)
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
        this.router.navigateByUrl(`/home/thread-detail/${id}`)
    }


    onScroll(): void {
        this.initData(this.startPage, this.maxPage + 5, this.query)
        this.maxPage += this.maxPage
    }

    goToSubscription = (): void => {
        if (this.isLogin) {
            this.router.navigateByUrl('/home/subscriptions')
        }
    }

    viewImage(src: string) {
        this.imageViewFull = !this.imageViewFull
        this.imageSource = src
    }

    closeViewImage() {
        this.imageSource = ""
        this.imageViewFull = !this.imageViewFull
    }

    search = (): void => {
        this.isClear = true
        this.initData(this.startPage, this.maxPage, this.query)
    }

    clear = (): void => {
        this.isClear = false
        this.query = ''
        this.initData(this.startPage, this.maxPage, this.query)
    }

    goToArticle = (id: string): void => {
        this.router.navigateByUrl(`/home/articles/${id}`)
    }
}
