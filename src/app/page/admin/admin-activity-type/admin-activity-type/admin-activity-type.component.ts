import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { Subscription } from "rxjs";
import { ShowActivityTypes } from "src/app/dto/activity-type/show-activity-types";
import { ActivityTypeService } from "src/app/service/activity-type.service";

@Component({
    selector: "app-admin-activity-type",
    templateUrl: "./admin-activity-type.component.html",
    providers : [
        ConfirmationService
    ]
})
export class AdminActivityType implements OnInit, OnDestroy{

    constructor(
        private confirmationService : ConfirmationService,
        private activityTypeService : ActivityTypeService,
        private router: Router
    ) { }

    activityTypes : ShowActivityTypes = {} as ShowActivityTypes
    deleteSubs? : Subscription
    isDeleted! : number

    initData() : void {
        this.activityTypeService.getAll().subscribe(result => {
            this.activityTypes = result
        })
    }

    ngOnInit(): void {
        this.initData()
    }

    ngOnDestroy(): void {
        
    }

    goTo() {
        this.router.navigate(['admin/activity-type/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/activity-type/update/${id}`])
    }

    onDelete(id: number): void {
        this.isDeleted = id;
    }

    deleted(): void {
        this.deleteSubs = this.activityTypeService
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