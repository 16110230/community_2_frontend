import { Component } from "@angular/core";
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
            threadCategoryName: "category1",
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
}