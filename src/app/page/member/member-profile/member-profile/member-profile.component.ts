import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
export class MemberProfileComponent implements OnInit, OnDestroy {

    constructor(
        private router: Router,
        private threadService : ThreadService,
        private userService : UsersService,
        private threadActivityService : ThreadActivityService
    ) { }

    startPage : number = 0
    maxPage : number = 3
    profSubs? : Subscription
    profilePic? : string
    threads : ShowThreads = { data: [] }
    user : ShowUserById = {
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
    }

    ngOnDestroy(): void {
        this.profSubs?.unsubscribe();
    }

    initData = (startPage : number, maxPage : number) : void => {
        this.threadService.getAllProfile(startPage, maxPage)
            .subscribe(res => {
                this.threads = res
            })

        this.userService.getUserProfile()
            .subscribe(res => {
                this.user = res
                if(res.data.file) this.profilePic = `http://localhost:1221/files/${res.data.file}`
            })
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

    goToComment = (id : string) => (
        this.router.navigateByUrl(`home/thread-detail/${id}`)
    )

    like(data: string): void {
        this.insert.thread = data
        this.insert.threadActivityCategory = LIKE

        this.threadActivityService.insert(
            this.insert
        ).subscribe(result => {
            this.initData(this.startPage, this.maxPage)
        })
    }

    unlike(data: string): void {
        this.insert.thread = data
        this.insert.threadActivityCategory = LIKE
        this.threadActivityService.deleteByThreadId(
            this.insert
        ).subscribe(result => {
            this.initData(this.startPage, this.maxPage)
        })
    }

    bookmark(data: string): void {
        this.insert.thread = data
        this.insert.threadActivityCategory = BOOKMARK
        this.threadActivityService.insert(
            this.insert
        ).subscribe(result => {
            this.initData(this.startPage, this.maxPage)
        })
    }

    unBookmark(data: string): void {
        this.insert.thread = data
        this.insert.threadActivityCategory = BOOKMARK
        this.threadActivityService.deleteByThreadId(
            this.insert
        ).subscribe(result => {
            this.initData(this.startPage, this.maxPage)
        })
    }

    onScroll(): void {
        this.initData(this.startPage, this.maxPage)
        this.maxPage += this.maxPage
    }
}