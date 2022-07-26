import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-organization-industrys",
    templateUrl: "./admin-organization-industrys.component.html"
})

export class AdminOrganizationIndustryComponent {

    companys = [
        {
            id: 1,
            companyName: "PT. Lawencon Internatioanl",
            companyCode: "LWN",
            address: "",
            isActive: true
        },
        {
            id: 2,
            companyName: "PT. Asus International",
            companyCode: "ASUS",
            address: "",
            isActive: true
        }
    ]

    constructor(
        private router: Router
    ) { }

    goTo() {
        this.router.navigate(['/admin/organization/industry/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/organization/industry/update/${id}`])
    }

}