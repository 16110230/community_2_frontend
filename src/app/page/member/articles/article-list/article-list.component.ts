import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ShowThreads } from "src/app/dto/thread/show-threads";
import { ThreadService } from "src/app/service/thread.service";

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['../article.component.css']
})
export class ArticleListComponent implements OnInit, OnDestroy {

    constructor(
        private threadService: ThreadService
    ) { }

    startPage: number = 0
    maxPage: number = 8
    threadSubs?: Subscription
    threads: ShowThreads = { data: [] }
    totalData: number = 0

    ngOnInit(): void {
        this.initData(this.startPage, this.maxPage)

    }

    ngOnDestroy(): void {
        this.threadSubs?.unsubscribe();
    }

    initData = (startPage: number, maxPage: number): void => {
        this.threadSubs = this.threadService.getAllThreadArticleWithPagination(startPage, maxPage).subscribe(
            result => {
                const resultData: any = result
                this.threads.data = resultData.data
                this.totalData = resultData.count
            },
        )
    }

}