import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { InsertActivityCategoryReq } from "src/app/dto/activity-category/insert-activity-category-req";
import { ActivityCategoryService } from "src/app/service/activity-category.service";

@Component({
    selector: "app-admin-activity-category-create",
    templateUrl: "./admin-activity-category-create.component.html"
})
export class AdminActivityCategoryCreate {

    constructor(
        private activityCategoryService : ActivityCategoryService,
        private router: Router,
    ) { }

    insert: InsertActivityCategoryReq = {
        categoryName : "",
        categoryCode : "",
        isActive : false
    }
    isLoading : boolean = false

    onSubmit() : void {
        this.isLoading = true
        this.activityCategoryService.insert(this.insert).subscribe(result => {
            this.router.navigateByUrl('/admin/activity-category')
            this.isLoading = false
        })
    }

    goTo() {
        this.router.navigate(['/admin/activity-category'])
    }
}