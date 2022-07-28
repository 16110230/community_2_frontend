import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { Subscription } from "rxjs";
import { ShowIndustries } from "src/app/dto/industry/show-industries";
import { IndustryService } from "src/app/service/industry.service";

@Component({
    selector: "app-admin-industry",
    templateUrl: "./admin-industry.component.html",
    providers : [
        ConfirmationService
    ]
})

export class AdminIndustryComponent implements OnInit {

    constructor(
        private confirmationService : ConfirmationService,
        private industryService : IndustryService,
        private router: Router
    ) { }

    industries : ShowIndustries = {} as ShowIndustries
    deleteSubs? : Subscription
    isDeleted! : number

    initData() :void {
        this.industryService.getAll().subscribe(result => {
            this.industries = result
        })
    }

    ngOnInit(): void {
        this.initData()
    }

    goTo() {
        this.router.navigate(['/admin/industry/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/industry/update/${id}`])
    }

    onDelete(id : number) : void {
        this.isDeleted = id
    }

    deleted() : void {
        this.deleteSubs = this.industryService
        .delete(this.isDeleted)
        .subscribe(result => {
            this.initData()
        })
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