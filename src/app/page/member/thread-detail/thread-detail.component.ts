import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ShowThreadDetails } from "src/app/dto/thread-details/show-thread-details";
import { ThreadDetailsDto } from "src/app/dto/thread-details/thread-details-dto";
import { ShowThreadById } from "src/app/dto/thread/show-thread-by-id";
import { ShowThreads } from "src/app/dto/thread/show-threads";
import { ThreadDto } from "src/app/dto/thread/thread-dto";
import { ThreadDetailsService } from "src/app/service/thread-details.service";
import { ThreadService } from "src/app/service/thread.service";

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
            createdAt : ''
        }
    } 
    threadData? : ThreadDto 
    threadDetails : ShowThreadDetails = {} as ShowThreadDetails
    threadDetailsData : ThreadDetailsDto[] = []
    articles : ShowThreads = {} as ShowThreads
    articlesData : ThreadDto[] = []
    subs? : Subscription
    idParam! : string

    constructor(
        private activateRoute : ActivatedRoute,
        private threadService : ThreadService, 
        private threadDetailService : ThreadDetailsService,
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
    }

    trimChar(data : string) : string{
        let result : string = data.substr(0, 120)+"...";
        return result;
    }

    trimCharSubs(data : string) : string{
        let result : string = data.substr(0, 200)+"...";
        return result;
    }

    ngOnInit(): void {
        this.initData()
    }
    ngOnDestroy(): void {
      this.subs?.unsubscribe()
    }
}