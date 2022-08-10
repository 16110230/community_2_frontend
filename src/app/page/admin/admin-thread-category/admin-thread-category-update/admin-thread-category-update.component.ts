import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UpdateThreadCategoryReq } from "../../../../dto/thread-category/update-thread-category-req";
import { ThreadCategoryService } from "../../../../service/thread-category.service";

@Component({
    selector: "app-thread-category-update",
    templateUrl: "./admin-thread-category-update.component.html"
})
export class AdminThreadCategoryUpdateComponent {

    constructor(
        private activateRoute : ActivatedRoute,
        private threadCategoryService : ThreadCategoryService,
        private router: Router
    ) { }

    update : UpdateThreadCategoryReq = {
        id : "",
        categoryName : "",
        categoryCode : "",
        isActive : false,
        version : 0
    }

    idParam! : number
    threadCatSubs? : Subscription
    isLoading : boolean = false

    ngOnInit() : void {
        this.activateRoute.params.subscribe(result => {
            const resultTemp : any = result
            this.idParam = resultTemp.id

            this.threadCategoryService.getById(this.idParam).subscribe(res => {
                this.update.id = res.data.id
                this.update.categoryName = res.data.categoryName
                this.update.categoryCode = res.data.categoryCode
                this.update.isActive = res.data.isActive
                this.update.version = res.data.version
            })
        })
    }

    onUpdate() : void {
        this.isLoading = true
        this.threadCategoryService.update(this.update).subscribe(result => {
            this.router.navigateByUrl('/admin/thread-category')
            this.isLoading = false
        })
    }

    ngOnDestroy(): void {
        this.threadCatSubs?.unsubscribe()
    }

    goTo() {
        this.router.navigate(['/admin/thread-category'])
    }
}