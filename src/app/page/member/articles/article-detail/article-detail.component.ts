import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ShowThreadById } from "src/app/dto/thread/show-thread-by-id";
import { ThreadService } from "src/app/service/thread.service";

@Component({
    selector: 'app-article-detail',
    templateUrl: './article-detail.component.html',
    styleUrls: ['../article.component.css']
})
export class ArticleDetailComponent implements OnInit, OnDestroy {

    constructor(
        private activatedRoute: ActivatedRoute,
        private threadService: ThreadService
    ) { }

    thread: ShowThreadById = {} as ShowThreadById
    threadSub?: Subscription
    idParam?: string

    ngOnInit() {
        this.getData()
    }

    ngOnDestroy() {
        this.threadSub?.unsubscribe()
    }

    getData() {
        this.activatedRoute.params.subscribe(result => {
            const resultTemp: any = result
            this.idParam = resultTemp.id

            this.threadSub = this.threadService.getById(this.idParam!).subscribe(res => {
                this.thread.data = res.data
            })
        })
    }
}