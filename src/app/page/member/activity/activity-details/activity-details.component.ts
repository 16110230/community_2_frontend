import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ShowThreads } from "src/app/dto/thread/show-threads";
import { ThreadDto } from "src/app/dto/thread/thread-dto";
import { ThreadService } from "src/app/service/thread.service";

@Component({
    selector: 'app-activity-details',
    templateUrl: './activity-details.component.html',
    styleUrls: ['../activity.component.css', '../../home/home.component.css']
})
export class ActivityDetailsComponent implements OnInit {

    constructor(private router : Router, private threadService : ThreadService) {}

    firstStep : boolean = true

    articles: ShowThreads = {} as ShowThreads
    articlesData: ThreadDto[] = []

    clickStep = () : void => {
        this.firstStep = !this.firstStep
    }

    initData() : void {
        this.threadService.getAllArticles().subscribe((result) => {
            this.articles = result
            this.articlesData = result.data
        })
    }

    ngOnInit(): void {
        this.initData()
    }

    goToArticle = (id : string) : void => {
        this.router.navigateByUrl(`/home/articles/${id}`)
    }
}