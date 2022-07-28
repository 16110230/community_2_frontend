import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { Subscription } from "rxjs";
import { ShowActivityCategories } from "src/app/dto/activity-category/show-activity-categories";
import { ActivityCategoryService } from "src/app/service/activity-category.service";

@Component({
    selector: "app-admin-activity-category",
    templateUrl: "./admin-activity-category.component.html",
    providers : [
        ConfirmationService
    ]
})
export class AdminActivityCategory implements OnInit {

    constructor(
        private confirmationService : ConfirmationService,
        private activityCategoryService : ActivityCategoryService,
        private router: Router
    ) { }

    activityCategories : ShowActivityCategories = {} as ShowActivityCategories
    deleteSubs? : Subscription
    isDeleted! : number

    initData() : void {
        this.activityCategoryService.getAll().subscribe(result => {
            this.activityCategories = result
        })
    }

    ngOnInit(): void {
        this.initData()
    }

    goTo() {
        this.router.navigate(['admin/activity-category/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/activity-category/update/${id}`])
    }

    onDelete(id: number): void {
        this.isDeleted = id;
    }

    deleted(): void {
        this.deleteSubs = this.activityCategoryService
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