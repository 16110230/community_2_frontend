import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-thread-category-company",
    templateUrl: "./admin-thread-category.component.html"
})

export class AdminThreadCategoryComponent {

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
        this.router.navigate(['/admin/thread-category/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/thread-category/update/${id}`])
    }

}