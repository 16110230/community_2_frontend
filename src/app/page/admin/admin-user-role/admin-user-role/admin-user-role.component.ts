import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { Subscription } from "rxjs";
import { ShowUserRoles } from "src/app/dto/user-role/show-user-roles";
import { UserRoleService } from "src/app/service/user-role.service";

@Component({
    selector: "app-admin-user-role",
    templateUrl: "./admin-user-role.component.html",
    providers: [
        ConfirmationService
    ]
})
export class AdminUserRoleComponent implements OnDestroy {

    constructor(
        private confirmationService: ConfirmationService,
        private userRoleService: UserRoleService,
        private router: Router
    ) { }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string
    isLoading: boolean = false

    roles: ShowUserRoles = {} as ShowUserRoles
    userRoleSub?: Subscription
    deleteSubs?: Subscription
    isDeleted!: number

    initData(): void {
        this.userRoleSub = this.userRoleService.getAllWithPagination(this.startPage, this.maxPage, this.query).subscribe(result => {
            this.roles = result
        })
    }

    loadData(event: LazyLoadEvent) {
        this.getData(event.first, event.rows, event.globalFilter)
    }

    getData(startPage: number = this.startPage, maxPage: number = this.maxPage, query?: string): void {
        this.loading = true;
        this.startPage = startPage
        this.maxPage = maxPage
        this.query = query

        this.userRoleSub = this.userRoleService.getAllWithPagination(startPage, maxPage, query).subscribe(
            result => {
                const resultData: any = result
                this.roles.data = resultData.data
                this.loading = false
                this.totalData = resultData.total
            },
        )
    }

    editAt(id: string) {
        this.router.navigate([`/admin/user-role/update/${id}`])
    }

    goTo() {
        this.router.navigate(['/admin/user-role/create'])
    }

    onDelete(id: number) {
        this.isDeleted = id
    }

    deleted(): void {
        this.isLoading = true
        this.deleteSubs = this.userRoleService
            .delete(this.isDeleted)
            .subscribe(result => {
                if (this.maxPage != 5) this.initData()
                else this.getData(this.startPage, this.maxPage, this.query)
                this.loading = false
            })
    }

    confirm(id: number): void {
        this.isDeleted = id
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.deleted()
            }
        })
    }

    ngOnDestroy() {
        this.deleteSubs?.unsubscribe()
        this.userRoleSub?.unsubscribe()
    }
}