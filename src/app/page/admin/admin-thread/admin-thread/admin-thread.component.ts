import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { Subscription } from "rxjs";
import { ShowThreads } from "../../../../dto/thread/show-threads";
import { ThreadService } from "../../../../service/thread.service";

@Component({
    selector: "app-admin-thread",
    templateUrl: "./admin-thread.component.html"
})
export class AdminThreadComponents implements OnInit {
    threads : ShowThreads = {} as ShowThreads
    deleteSubs? : Subscription
    isDeleted! : number

    constructor(
        private threadService : ThreadService,
        private router: Router,
        private confirmationService: ConfirmationService
    ) { }

    initData() : void {
        this.threadService.getAll().subscribe(result => {
            this.threads = result
        })
    }

    ngOnInit(): void {
        this.initData()
    }

    goTo(id: number) {
        this.router.navigate([`/admin/thread/update/${id}`])
    }

    pollingTo(id: string) {
        this.router.navigate([`/admin/thread/polling/${id}`])
    }

    onDelete(id : number) : void {
        this.isDeleted = id
    }

    deleted() : void {
        this.deleteSubs = this.threadService
        .delete(this.isDeleted)
        .subscribe((_) => {
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