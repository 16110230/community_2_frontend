import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { Subscription } from "rxjs";
import { BOOKMARK, LIKE } from "src/app/constant/constant";
import { InsertThreadActivityReq } from "src/app/dto/thread-activity/insert-thread-activity-req";
import { ShowThreads } from "src/app/dto/thread/show-threads";
import { ShowUserById } from "src/app/dto/users/show-user-by-id";
import { ThreadActivityService } from "src/app/service/thread-activity.service";
import { ThreadService } from "src/app/service/thread.service";
import { UsersService } from "src/app/service/users.service";

@Component({
    selector: "app-member-profiel",
    templateUrl: "./member-profile.component.html",
    styleUrls: ['../../home/home.component.css']
})
export class MemberProfileComponent implements OnInit {

    constructor(
        private router: Router,
        private threadService: ThreadService,
        private userService: UsersService,
        private threadActivityService: ThreadActivityService
    ) { }

    // bookmarks
    bookmarkStartPage: number = 0
    bookmarkMaxPage: number = 2
    bookmarkTotalData: number = 0
    bookmarkLoading: boolean = true
    bookmarkThreads: ShowThreads = { data: [] }
    bookmarkThreadSub?: Subscription
    query?: string
    //------------------------

    // likes
    likeStartPage: number = 0
    likeMaxPage: number = 2
    likeTotalData: number = 0
    likeLoading: boolean = true
    likeThreads: ShowThreads = { data: [] }
    likeThreadSub?: Subscription
    //------------------------

    startPage: number = 0
    maxPage: number = 2
    profSubs?: Subscription
    profilePic?: string
    threads: ShowThreads = { data: [] }
    user: ShowUserById = {
        data: {
            id: '',
            fullName: '',
            username: '',
            email: '',
            balance: 0,
            company: '',
            companyName: '',
            industry: '',
            industryName: '',
            position: '',
            positionName: '',
            file: '',
            isActive: false,
            version: 0,
            fileExt: '',
            fileName: ''
        }
    }

    insert: InsertThreadActivityReq = {
        thread: "",
        threadActivityCategory: "",
        isActive: true
    }

    ngOnInit(): void {
        this.initData(this.startPage, this.maxPage)
        this.items = [
            {label : 'Threads'},
            {label : 'Bookmark'},
            {label : 'Like'}
        ]

    }

    items! : MenuItem[]

    // ngOnDestroy(): void {
    //     this.profSubs?.unsubscribe();
    // }

    initData = (startPage: number, maxPage: number): void => {
        this.threadService.getAllProfile(startPage, maxPage)
            .subscribe(res => {
                this.threads = res
            })

        this.userService.getUserProfile()
            .subscribe(res => {
                this.user = res
                if (res.data.file) this.profilePic = `http://localhost:1221/files/${res.data.file}`
            })

        // this.getBookmarkData(this.bookmarkStartPage, this.bookmarkMaxPage)
        // this.getLikeData(this.likeStartPage, this.likeMaxPage)
    }

    goToEditProfile() {
        this.router.navigateByUrl('/home/profiles/edit')
    }
    goToTransaction() {
        this.router.navigateByUrl('/home/profiles/transaction')
    }
    goToActivity() {
        this.router.navigateByUrl('/home/profiles/activity')
    }

    goToComment = (id: string) => (
        this.router.navigateByUrl(`home/thread-detail/${id}`)
    )

    // like(data: string): void {
    //     this.insert.thread = data
    //     this.insert.threadActivityCategory = LIKE

    //     this.threadActivityService.insert(
    //         this.insert
    //     ).subscribe(result => {
    //         this.initData(this.startPage, this.maxPage)
    //     })
    // }

    // unlike(data: string): void {
    //     this.insert.thread = data
    //     this.insert.threadActivityCategory = LIKE
    //     this.threadActivityService.deleteByThreadId(
    //         this.insert
    //     ).subscribe(result => {
    //         this.initData(this.startPage, this.maxPage)
    //     })
    // }

    // bookmark(data: string): void {
    //     this.insert.thread = data
    //     this.insert.threadActivityCategory = BOOKMARK
    //     this.threadActivityService.insert(
    //         this.insert
    //     ).subscribe(result => {
    //         this.initData(this.startPage, this.maxPage)
    //     })
    // }

    // unBookmark(data: string): void {
    //     this.insert.thread = data
    //     this.insert.threadActivityCategory = BOOKMARK
    //     this.threadActivityService.deleteByThreadId(
    //         this.insert
    //     ).subscribe(result => {
    //         this.initData(this.startPage, this.maxPage)
    //     })
    // }

    // // thread
    // onScrollThread(): void {
    //     this.initData(this.startPage, this.maxPage + 2)
    //     this.maxPage += this.maxPage
    // }
    // //----------------------------

    // // bookmark
    // getBookmarkData(bookmarkStartPage: number = this.bookmarkStartPage, bookamrkMaxPage: number = this.bookmarkMaxPage): void {

    //     this.bookmarkThreadSub = this.threadService.getByBookmark(bookmarkStartPage, bookamrkMaxPage).subscribe(
    //         result => {
    //             const resultData: any = result
    //             this.bookmarkThreads.data = resultData.data
    //             this.bookmarkTotalData = resultData.count
    //         },
    //     )
    // }

    // onScrollBookmark(): void {
    //     this.getBookmarkData(this.bookmarkStartPage, this.bookmarkMaxPage + 2)
    //     this.bookmarkMaxPage += this.bookmarkMaxPage

    // }
    // //----------------------

    // // like
    // getLikeData(likeStartPage: number = this.likeStartPage, likeMaxPage: number = this.likeMaxPage): void {

    //     this.likeThreadSub = this.threadService.getByLike(likeStartPage, likeMaxPage).subscribe(
    //         result => {
    //             const resultData: any = result
    //             this.likeThreads.data = resultData.data
    //             this.likeTotalData = resultData.count
    //         }
    //     )
    // }

    // onScrollLike(): void {
    //     this.getLikeData(this.likeStartPage, this.likeMaxPage + 2)
    //     this.likeMaxPage += this.likeMaxPage

    // }
    //----------------------

    threadPage : string = 'first'
    bookmarkPage : string = 'second'
    likePage : string = 'third'
    menuThread : number = 0

    clickStep = () : void => {
        this.threadPage
        this.bookmarkPage
        this.likePage
    }
}