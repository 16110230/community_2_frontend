import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UpdateCompanyReq } from "../../../../dto/company/update-company-req";
import { CompanyService } from "../../../../service/company.service";

@Component({
    selector: "app-admin-company-update",
    templateUrl: "./admin-company-update.component.html"
})
export class AdminCompanyUpdateComponent implements OnInit, OnDestroy {

    constructor(
        private activateRoute : ActivatedRoute,
        private companyService : CompanyService,
        private router: Router
    ) { }

    companyData : UpdateCompanyReq = {
        id : "",
        companyName : "",
        companyCode : "",
        address : "",
        email : "",
        version : 0,
        isActive : false
    }

    idParam! : number
    companySubs? : Subscription

    ngOnInit(): void {
        this.activateRoute.params.subscribe(result => {
            const resultTemp : any = result
            this.idParam = resultTemp.id

            this.companyService.getById(this.idParam).subscribe(res => {
                this.companyData.id = res.data.id
                this.companyData.companyName = res.data.companyName
                this.companyData.companyCode = res.data.companyCode
                this.companyData.address = res.data.address
                this.companyData.email = res.data.email
                this.companyData.version = res.data.version
                this.companyData.isActive = res.data.isActive
            })
        })
    }

    updateSubmit() : void {
        this.companyService.update(this.companyData).subscribe(result => {
            this.router.navigateByUrl('/admin/company')
        })
    }

    ngOnDestroy(): void {
        this.companySubs?.unsubscribe
    }

    goTo() {
        this.router.navigate(['/admin/company'])
    }
}