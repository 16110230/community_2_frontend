import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { Subscription } from "rxjs";
import { ShowThreadCategories } from "src/app/dto/thread-category/show-thread-categories";
import { ThreadCategoryService } from "src/app/service/thread-category.service";

@Component({
    selector: "app-thread-category-company",
    templateUrl: "./admin-thread-category.component.html",
    providers : [
        ConfirmationService
    ]
})

export class AdminThreadCategoryComponent {

    constructor(
        private confirmationService : ConfirmationService,
        private threadCategoryService : ThreadCategoryService,
        private router: Router
    ) { }

    threadCategories : ShowThreadCategories = {} as ShowThreadCategories
    deleteSubs? : Subscription
    isDeleted! : number

    initData() : void {
        this.threadCategoryService.getAll().subscribe(result => {
            this.threadCategories = result
        })
    }

    ngOnInit(): void {
        this.initData()
    }

    goTo() {
        this.router.navigate(['/admin/thread-category/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/thread-category/update/${id}`])
    }

    onDelete(id: number) {
        this.isDeleted = id
    }

    deleted() : void {
        this.deleteSubs = this.threadCategoryService
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