import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ShowThreadCategories } from "src/app/dto/thread-category/show-thread-categories";
import { ThreadCategoryDto } from "src/app/dto/thread-category/thread-category-dto";
import { InsertThreadReq } from "src/app/dto/thread/insert-thread-req";
import { ThreadCategoryService } from "src/app/service/thread-category.service";
import { ThreadService } from "src/app/service/thread.service";

@Component({
    selector: "app-admin-article-create",
    templateUrl: "./admin-article-create.component.html"
})
export class AdminArticleCreateComponent implements OnDestroy, OnInit {
    categories : ShowThreadCategories = {} as ShowThreadCategories
    categoryData : ThreadCategoryDto[] = []
    threadData : InsertThreadReq = {
        threadTitle : "",
        threadContent : "",
        threadCategory : "",
        fileName : "",
        fileExt : ""
    }

    threadSubs? : Subscription

    constructor(
        private threadService : ThreadService, 
        private threadCategoryService : ThreadCategoryService, 
        private router: Router
    ) { }

    ngOnInit(): void {
        this.categories.data = []
        this.initData()
    }

    initData() : void {
        this.threadCategoryService.getAll().subscribe((result) => {
            this.categories = result;
            this.categoryData = result.data;
        })
    }

    insertThread() : void {
        this.threadSubs =this.threadService.insert(this.threadData)
            .subscribe(result => {
                this.router.navigateByUrl('/admin/article')
            })
    }

    goTo() {
        this.router.navigate(['/admin/article'])
    }

    ngOnDestroy(): void {
        this.threadSubs?.unsubscribe()
    }
}