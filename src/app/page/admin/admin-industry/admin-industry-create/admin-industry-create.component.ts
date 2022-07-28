import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { InsertIndustryReq } from "src/app/dto/industry/insert-industry-req";
import { ShowIndustries } from "src/app/dto/industry/show-industries";
import { IndustryService } from "src/app/service/industry.service";

@Component({
    selector: "app-admin-industry-create",
    templateUrl: "./admin-industry-create.component.html"
})
export class AdminIndustryCreateComponent implements OnDestroy {

    constructor(
        private industryService : IndustryService,
        private router: Router
    ) { }

    insert : InsertIndustryReq = {
        industryName : "",
        industryCode : "",
        isActive : false
    }

    industrySubs? : Subscription

    insertIndustry() : void {
        this.industryService.insert(this.insert).subscribe(result => {
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