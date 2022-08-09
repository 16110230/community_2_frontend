import { Component, OnDestroy,  } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { InsertSubsCaregoryReq } from "src/app/dto/subs-category/insert-subs-category-req";
import { SubsCategoryService } from "src/app/service/subs-category.service";

@Component({
    selector: "app-subscription-category-create",
    templateUrl: "./admin-subscription-category-create.component.html"
})
export class AdminSubscriptionCategoryCreateComponent implements OnDestroy {
    constructor(
        private subsCategoryService : SubsCategoryService,
        private router: Router
    ) { }

    insert : InsertSubsCaregoryReq = {
        description : "",
        price : 0,
        isActive : false,
        duration : 0
    }

    subsCategorySubs? : Subscription

    onSubmit() {
        this.subsCategoryService.insert(this.insert).subscribe(result => {
            this.router.navigateByUrl('/admin/subscription-category')
        })
    }

    goTo() {
        this.router.navigate(['/admin/subscription-category'])
    }

    ngOnDestroy(): void {
        this.subsCategorySubs?.unsubscribe()
    }
}