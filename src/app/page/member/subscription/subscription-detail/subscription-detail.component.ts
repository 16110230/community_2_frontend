import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ShowSubsCategoryById } from "src/app/dto/subs-category/show-subs-category-by-id";
import { InsertSubscriptionReq } from "src/app/dto/subscription/insert-subscription.req";
import { ShowSubscriptionById } from "src/app/dto/subscription/show-subscription-by-id";
import { ShowThreads } from "src/app/dto/thread/show-threads";
import { ThreadDto } from "src/app/dto/thread/thread-dto";
import { FileService } from "src/app/service/file.service";
import { SubsCategoryService } from "src/app/service/subs-category.service";
import { SubscriptionService } from "src/app/service/subscription.service";
import { ThreadService } from "src/app/service/thread.service";

@Component({
    selector: 'app-details-subscription',
    templateUrl: './subscription-detail.component.html',
    styleUrls : [
        '../../activity/activity.component.css',
        '../../home/home.component.css'
    ]
})
export class SubscriptionDetailComponent implements OnInit, OnDestroy {
    constructor(private subscriptionService : SubscriptionService, private activateRoute : ActivatedRoute, 
        private fileService : FileService, private router : Router, private subsCategoryService : SubsCategoryService,
        private threadService : ThreadService) {}

    subscription : ShowSubsCategoryById = {
        data : {
            id : "",
            description : "",
            price : 0,
            version : 0,
            isActive : false,
            duration : 0
        }
    }

    insert : InsertSubscriptionReq = {
        user : "",
        isApproved : "",
        subscriptionCategory : "",
        isActive : false
    }

    idParam! : string
    articles: ShowThreads = {} as ShowThreads
    articlesData: ThreadDto[] = []
    detailSubs? : Subscription

    initData() :void {
        this.activateRoute.params.subscribe(result => {
            const resultTemp : any = result
            this.idParam = resultTemp.id
            this.insert.subscriptionCategory = this.idParam

            this.subsCategoryService.getById(this.idParam).subscribe(result => {
                this.subscription = result
            })
        })

        this.threadService.getAllArticles().subscribe((result) => {
            this.articles = result
            this.articlesData = result.data
        })
    }

    submit = (): void => {
        this.subscriptionService.insert(this.insert).subscribe(() => this.router.navigateByUrl('/home'))
    }

    ngOnInit(): void {
        this.initData()
    }

    change(event: any): void {

        const file = event.files[0]
        this.fileService.uploadAsBase64(file).then(res => {
            this.insert.fileName = res[0]
            this.insert.fileExt = res[1]
        })
    }

    ngOnDestroy(): void {
        this.detailSubs?.unsubscribe()
    }

    goToArticle = (id : string) : void => {
        this.router.navigateByUrl(`/home/articles/${id}`)
    }
}