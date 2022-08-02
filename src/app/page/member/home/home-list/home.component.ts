import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ShowThreads } from "src/app/dto/thread/show-threads";
import { ThreadDto } from "src/app/dto/thread/thread-dto";
import { ThreadService } from "src/app/service/thread.service";

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
    subs?: Subscription

    constructor(
        private threadService: ThreadService,
        private router: Router
    ) { }

    initData(): void {
        this.threadService.getAll(0, 0).subscribe((result) => {
            this.threads = result
            this.threadsData = result.data

        })
        this.threadService.getAllArticles().subscribe((result) => {
            this.articles = result
            this.articlesData = result.data
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
        this.router.navigate([`/member/thread-detail/${id}`])
    }

    ngOnInit(): void {
        this.initData()
    }
    ngOnDestroy(): void {

    }
}
