import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UpdateIndustryReq } from "src/app/dto/industry/update-industry-req";
import { IndustryService } from "src/app/service/industry.service";

@Component({
    selector: "app-admin-industry-update",
    templateUrl: "./admin-industry-update.component.html"
})
export class AdminIndustryUpdateComponent implements OnInit, OnDestroy {

    constructor(
        private activateRoute : ActivatedRoute,
        private industryService : IndustryService,
        private router: Router
    ) { }

    update : UpdateIndustryReq = {
        id : "",
        industryName : "",
        industryCode : "",
        isActive : false,
        version : 0
    }

    idParam! : number
    industrySubs? : Subscription

    ngOnInit(): void {
        this.activateRoute.params.subscribe(result => {
            const resultTemp : any = result
            this.idParam = resultTemp.id

            this.industryService.getById(this.idParam).subscribe(res => {
                this.update.id = res.data.id
                this.update.industryName = res.data.industryName
                this.update.industryCode = res.data.industryCode
                this.update.isActive = res.data.isActive
                this.update.version = res.data.version
            })
        })
    }

    onUpdate() :void {
        this.industryService.update(this.update).subscribe(result => {
            this.router.navigateByUrl('/admin/industry')
        })
    }

    ngOnDestroy(): void {
        this.industrySubs?.unsubscribe()
    }

    goTo() {
        this.router.navigate(['/admin/industry'])
    }
}