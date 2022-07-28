import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { InsertCompanyReq } from "../../../../dto/company/insert-company-req";
import { CompanyService } from "../../../../service/company.service";

@Component({
    selector: "app-admin-company-create",
    templateUrl: "./admin-company-create.component.html"
})
export class AdminCompanyCreateComponent implements OnDestroy {

    constructor(
        private companyService : CompanyService,
        private router: Router
    ) { }

    data : InsertCompanyReq = {
        companyName : "",
        companyCode : "",
        email : "",
        address : "",
        isActive : true
    }

    companySubs? : Subscription

    insertCompany() {
        this.companyService.insert(this.data).subscribe(result => {
            this.router.navigateByUrl('/admin/company')
        })
    }

    goTo() {
        this.router.navigate(['/admin/company'])
    }

    ngOnDestroy(): void {
        this.companySubs?.unsubscribe()
    }
}