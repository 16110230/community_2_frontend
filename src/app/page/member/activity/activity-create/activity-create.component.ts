import { formatDate } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ShowActivityCategories } from "src/app/dto/activity-category/show-activity-categories";
import { ShowActivityTypes } from "src/app/dto/activity-type/show-activity-types";
import { InsertActivityReq } from "src/app/dto/activity/insert-activity-req";
import { ShowThreads } from "src/app/dto/thread/show-threads";
import { ThreadDto } from "src/app/dto/thread/thread-dto";
import { ActivityCategoryService } from "src/app/service/activity-category.service";
import { ActivityTypeService } from "src/app/service/activity-type.service";
import { ActivityService } from "src/app/service/activity.service";
import { FileService } from "src/app/service/file.service";
import { ThreadService } from "src/app/service/thread.service";

@Component({
    selector: 'app-activity-new',
    templateUrl: './activity-create.component.html',
    styleUrls: ['../../home/home.component.css', '../activity.component.css']
})
export class ActivityCreateComponent implements OnInit, OnDestroy {

    constructor(private activityTypeService: ActivityTypeService, private activityService: ActivityService,
        private router: Router, private fileService: FileService, private activityCategoryService: ActivityCategoryService,
        private threadService : ThreadService) { }

    activitySubs?: Subscription

    data: InsertActivityReq = {
        activityTitle: '',
        activityContent: '',
        activityCategory: '',
        activityType: '',
        startedAt: '',
        endedAt: '',
        fee: 0,
        quantity: 0,
        isLimit: false,
        provider: '',
        trainer: ''
    }

    types: ShowActivityTypes = {
        data: []
    }

    categories: ShowActivityCategories = {
        data: []
    }

    articles: ShowThreads = {} as ShowThreads
    articlesData: ThreadDto[] = []

    type: string = ''
    category: string = ''
    startDate: string = ''
    endDate: string = ''

    ngOnInit(): void {
        this.initData()
    }

    initData = (): void => {
        this.activityTypeService.getAll().subscribe(res => {
            this.types = res
        })

        this.activityCategoryService.getAll().subscribe(res => {
            this.categories = res
        })

        this.threadService.getAllArticles().subscribe((result) => {
            this.articles = result
            this.articlesData = result.data
        })
    }

    ngOnDestroy(): void {
        this.activitySubs?.unsubscribe()
    }

    submit = (): void => {
        const startDate = formatDate(this.data.startedAt, `yyyy-MM-dd'T'HH:mm:ss.SSS${this.getTimeZone()}`, 'en')
        const endDate = formatDate(this.data.endedAt, `yyyy-MM-dd'T'HH:mm:ss.SSS${this.getTimeZone()}`, 'en')
        this.data.startedAt = startDate
        this.data.endedAt = endDate

        this.activityService.insert(this.data).subscribe(() => this.router.navigateByUrl('/home/activities'))
    }

    change(event: any): void {
        console.log(event.files[0]);

        const file = event.files[0]
        this.fileService.uploadAsBase64(file).then(res => {
            this.data.fileName = res[0]
            this.data.fileExt = res[1]
        })
    }

    getTimeZone() {
        var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
        return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
    }
    
    goToArticle = (id : string) : void => {
        this.router.navigateByUrl(`/home/articles/${id}`)
    }
}