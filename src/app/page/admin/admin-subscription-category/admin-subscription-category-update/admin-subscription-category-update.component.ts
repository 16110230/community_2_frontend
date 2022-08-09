import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UpdateSubsCategoryReq } from "src/app/dto/subs-category/update-subs-category-req";
import { SubsCategoryService } from "src/app/service/subs-category.service";

@Component({
    selector: "app-subscription-category-update",
    templateUrl: "./admin-subscription-category-update.component.html"
})
export class AdminSubscriptionCategoryUpdateComponent implements OnInit, OnDestroy {
    constructor(
        private activateRoute : ActivatedRoute,
        private subsCategoryService : SubsCategoryService,
        private router: Router
    ) { }

    update : UpdateSubsCategoryReq = {
        id : "",
        description : "",
        price : 0,
        version : 0,
        duration : 0,
        isActive : false
    }

    idParam! : string
    subsCatSubs? : Subscription

    ngOnInit() : void {
        this.activateRoute.params.subscribe(result => {
            const resultTemp : any = result
            this.idParam = resultTemp.id

            this.subsCategoryService.getById(this.idParam).subscribe(res => {
                this.update.id = res.data.id
                this.update.description = res.data.description
                this.update.price = res.data.price
                this.update.duration = res.data.duration
                this.update.isActive = res.data.isActive
                this.update.version = res.data.version
            })
        })
    }

    onUpdate() : void {
        this.subsCategoryService.update(this.update).subscribe(result => {
            this.router.navigateByUrl('/admin/subscription-category')
        })
    }

    ngOnDestroy(): void {
        this.subsCatSubs?.unsubscribe()
    }

    goTo() {
        this.router.navigate(['/admin/subscription-category'])
    }
}