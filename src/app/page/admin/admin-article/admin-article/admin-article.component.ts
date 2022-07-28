import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ShowThreads } from "../../../../dto/thread/show-threads";
import { ThreadDto } from "../../../../dto/thread/thread-dto";
import { ThreadService } from "../../../../service/thread.service";

@Component({
    selector: "app-admin-article",
    templateUrl: "./admin-article.component.html"
})
export class AdminArticleComponent implements OnInit {

    articles : ShowThreads = {} as ShowThreads;
    articleData : ThreadDto[] = []


    constructor(
        private threadService : ThreadService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.articles.data = []
        this.initData()
    }

    initData() {
        this.threadService.getAll().subscribe(result => {
            this.articles = result
            this.articleData = result.data
        })
    }

    goTo() {
        this.router.navigate(['admin/article/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/article/update/${id}`])
    }
}