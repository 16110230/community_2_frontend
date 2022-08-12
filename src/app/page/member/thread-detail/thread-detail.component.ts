import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { BOOKMARK, LIKE, POLLING } from "src/app/constant/constant";
import { InsertThreadActivityReq } from "src/app/dto/thread-activity/insert-thread-activity-req";
import { InsertThreadDetailsReq } from "src/app/dto/thread-details/insert-thread-details-req";
import { ShowThreadDetails } from "src/app/dto/thread-details/show-thread-details";
import { ThreadDetailsDto } from "src/app/dto/thread-details/thread-details-dto";
import { ShowThreadById } from "src/app/dto/thread/show-thread-by-id";
import { ShowThreads } from "src/app/dto/thread/show-threads";
import { ThreadDto } from "src/app/dto/thread/thread-dto";
import { InsertUserPollingReq } from "src/app/dto/user-polling/insert-user-polling";
import { ShowUserById } from "src/app/dto/users/show-user-by-id";
import { ThreadActivityService } from "src/app/service/thread-activity.service";
import { ThreadDetailsService } from "src/app/service/thread-details.service";
import { ThreadService } from "src/app/service/thread.service";
import { UserPollingService } from "src/app/service/user-polling.service";
import { UsersService } from "src/app/service/users.service";

@Component({
    selector: 'app-thread-detail',
    templateUrl: './thread-detail.component.html',
    styleUrls: [
        '../home/home.component.css',
        './thread-detail.component.css'
    ]
})
export class ThreadDetailComponent implements OnInit, OnDestroy{
    thread : ShowThreadById = {
        data : {
            id : '', 
            threadTitle : '', 
            threadContent : '',
            user : '',
            userName : '',
            threadCategory : '',
            threadCategoryName : '',
            isActive : false,
            version : 0,
            createdAt : '',
            file : undefined
        }
    } 

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
            file: undefined,
            isActive: false,
            version: 0,
            fileExt: '',
            fileName: ''
        }
    } 
    insert: InsertThreadDetailsReq = {
        thread : "",
        threadDesc : "",
        isActive : true

    }
    insertActivity : InsertThreadActivityReq = {
        thread : "",
        threadActivityCategory : "",
        isActive : true
    }
    insertPolling : InsertUserPollingReq = {
        pollingDetails : ""
    }
    threadData? : ThreadDto
    threadDetails : ShowThreadDetails = {
        data : []
    } 
    threadDetailsData : ThreadDetailsDto[] = []
    articles : ShowThreads = {
        data : []
    }
    articlesData : ThreadDto[] = []
    subs? : Subscription
    idParam! : string
    polling : string  = POLLING
    localStorage = JSON.parse(localStorage.getItem('data') || '{}')
    nameUser = this.localStorage.data.username
    imageSource? : string
    imageViewFull : boolean = false
    profilePic?: string

    isLoading: boolean = false

    constructor(
        private activateRoute : ActivatedRoute,
        private threadService : ThreadService, 
        private threadActivityServcie : ThreadActivityService,
        private threadDetailService : ThreadDetailsService,
        private userPollingService: UserPollingService,
        private userService : UsersService,
        private router: Router
    ) { }

    initData(): void{
        this.activateRoute.params.subscribe(result => {
            const resultTemp : any = result
            this.idParam = resultTemp.id 
            this.threadService.getById(this.idParam).subscribe((result) => {
                this.thread = result
                
            })
        })
        this.activateRoute.params.subscribe(result => {
            const resultTemp : any = result
            this.idParam = resultTemp.id 
            this.threadDetailService.getAllByThread(this.idParam).subscribe((result) => {
                this.threadDetails = result
                this.threadDetailsData = result.data
                
            })
        })
        this.threadService.getAllArticles().subscribe((result) => {
            this.articles = result
            this.articlesData = result.data
        })

        this.userService.getUserProfile()
            .subscribe(res => {
                this.user = res
                if (res.data.file) this.profilePic = `http://localhost:1221/files/${res.data.file}`
            })
    }

    trimChar(data : string) : string{
        let result : string = data
        if(data.length > 120) 
        result = data.substr(0, 120)+"...";
        return result;
    }

    trimCharSubs(data : string) : string{
        let result : string = data.substr(0, 200)+"...";
        return result;
    }

    onSubmit() : void {
        this.isLoading = true
        this.activateRoute.params.subscribe(result => {
            const resultTemp : any = result
            this.idParam = resultTemp.id 
            this.insert.thread = this.idParam
            this.threadDetailService.insert(
                this.insert
                ).subscribe(result => {
                    this.initData()
                    this.insert.threadDesc = ''
                    this.isLoading = false
            })
        })
       
    }

    like(data : string) : void{
        this.insertActivity.thread = data
        this.insertActivity.threadActivityCategory = LIKE
        this.threadActivityServcie.insert(
            this.insertActivity
            ).subscribe(result => {
                this.initData()
        })
    }

    unlike(data : string) : void{
        this.insertActivity.thread = data
        this.insertActivity.threadActivityCategory = LIKE
        this.threadActivityServcie.deleteByThreadId(
            this.insertActivity
            ).subscribe(result => {
                this.initData()
        })
    }

    bookmark(data : string) : void{
        this.insertActivity.thread = data
        this.insertActivity.threadActivityCategory = BOOKMARK
        this.threadActivityServcie.insert(
            this.insertActivity
            ).subscribe(result => {
                this.initData()
        })
    }

    unBookmark(data : string) : void{
        this.insertActivity.thread = data
        this.insertActivity.threadActivityCategory = BOOKMARK
        this.threadActivityServcie.deleteByThreadId(
            this.insertActivity
            ).subscribe(result => {
                this.initData()
        })
    }

    insertPol(childId : any):void{
        this.insertPolling.pollingDetails = childId
        
        this.userPollingService.insert(
            this.insertPolling
        ).subscribe(result => {
            this.initData()
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

    goToArticle = (id : string) : void => {
        this.router.navigateByUrl(`/home/articles/${id}`)
    }

    ngOnInit(): void {
        this.initData()
    }
    ngOnDestroy(): void {
      this.subs?.unsubscribe()
    }
}