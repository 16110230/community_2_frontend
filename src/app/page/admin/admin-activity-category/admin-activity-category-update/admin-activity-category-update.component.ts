import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UpdateActivityCategoryReq } from "src/app/dto/activity-category/update-activity-category-req";
import { UpdateThreadReq } from "src/app/dto/thread/update-thread-req";
import { ActivityCategoryService } from "src/app/service/activity-category.service";

@Component({
    selector: "app-admin-activity-category-update",
    templateUrl: "./admin-activity-category-update.component.html"
})
export class AdminActivityCategoryUpdate implements OnDestroy, OnInit {

    constructor(
        private activateRoute : ActivatedRoute,
        private activityCategoryService : ActivityCategoryService,
        private router: Router
    ) { }

    update : UpdateActivityCategoryReq = {
        id : "",
        categoryName : "",
        categoryCode : "",
        isActive: false,
        version: 0
    }
    isLoading : boolean = false

    idParam! : number
    activityCategorySubs? : Subscription

    ngOnInit(): void {
        this.activateRoute.params.subscribe(result => {
            const resultTemp : any = result
            this.idParam = resultTemp.id

            this.activityCategoryService.getById(this.idParam).subscribe(res => {
                this.update.id = res.data.id
                this.update.categoryName = res.data.categoryName
                this.update.categoryCode = res.data.categoryCode
                this.update.version = res.data.version
                this.update.isActive = res.data.isActive
            })
        })
    }

    onUpdate() : void {
        this.isLoading = true
        this.activityCategoryService.update(this.update).subscribe(result => {
            this.router.navigateByUrl('/admin/activity-category')
            this.isLoading = false
        })
    }

    ngOnDestroy(): void {
        this.activityCategorySubs?.unsubscribe
    }


    goTo() {
        this.router.navigate(['/admin/activity-category'])
    }
}