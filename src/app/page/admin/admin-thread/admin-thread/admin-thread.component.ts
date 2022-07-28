import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";

@Component({
    selector: "app-admin-thread",
    templateUrl: "./admin-thread.component.html"
})
export class AdminThreadComponents {
    threads = [
        {
            id: 1,
            threadTitle: "this is title to express how long this title can be, and to see is table can handle long title",
            threadCategoryName: "polling",
            isActive: true

        },
        {
            id: 2,
            threadTitle: "this is title to express how long this title can be, and to see is table can handle long title",
            threadCategoryName: "category1",
            isActive: false

        }
    ]

    constructor(
        private router: Router,
        private confirmationService: ConfirmationService
    ) { }

    confirm() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                //Actual logic to perform a confirmation
            }
        });
    }

    goTo(id: number) {
        this.router.navigate([`/admin/thread/update/${id}`])
    }

    pollingTo(id: string) {
        this.router.navigate([`/admin/thread/polling/${id}`])
    }
}