import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { Subscription } from "rxjs";
import { ShowCompanies } from "../../../../dto/company/show-companies";
import { CompanyService } from "../../../../service/company.service";

@Component({
    selector: "app-admin-company",
    templateUrl: "./admin-company.component.html",
    providers : [
        ConfirmationService
    ]
})

export class AdminCompanyComponent implements OnInit {

    constructor(
        private companyService : CompanyService,
        private confirmationService : ConfirmationService,
        private router: Router
    ) { }

    companies : ShowCompanies = {} as ShowCompanies
    deleteSubscription?: Subscription
    isDeleted!: number;

    initData() {
        this.companyService.getAll().subscribe(result => {
            this.companies = result
        })
    }

    ngOnInit(): void {
        this.initData()
    }

    goTo() {
        this.router.navigate(['/admin/company/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/company/update/${id}`])
    }

    onDelete(id: number): void {
        this.isDeleted = id;
    }

    deleted(): void {
        this.deleteSubscription = this.companyService
        .delete(this.isDeleted)
        .subscribe((_) => {
            this.initData();
        });
    }

    confirm(id: number) {
        this.isDeleted = id
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.deleted()
            }
        });
    }
}