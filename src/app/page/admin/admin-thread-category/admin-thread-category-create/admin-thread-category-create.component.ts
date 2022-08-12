import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { InsertThreadCategoryReq } from "src/app/dto/thread-category/insert-thread-category-req";
import { ThreadCategoryService } from "src/app/service/thread-category.service";

@Component({
    selector: "app-admin-thread-category-create",
    templateUrl: "./admin-thread-category-create.component.html"
})
export class AdminThreadCategoryCreateComponent implements OnDestroy {

    constructor(
        private threadCategory : ThreadCategoryService,
        private router: Router
    ) { }

    insert : InsertThreadCategoryReq = {
        categoryName : "",
        categoryCode : "",
        isActive : false
    }

    threadCategorySubs? : Subscription
    isLoading : boolean = false

    onSubmit() {
        this.isLoading = true
        this.threadCategory.insert(this.insert).subscribe(result => {
            this.router.navigateByUrl('/admin/thread-category')
            this.isLoading = false
        })

        setTimeout(() => {
            this.isLoading = false
        }, 1000)
    }

    goTo() {
        this.router.navigate(['/admin/thread-category'])
    }

    ngOnDestroy(): void {
        this.threadCategorySubs?.unsubscribe()
    }
}