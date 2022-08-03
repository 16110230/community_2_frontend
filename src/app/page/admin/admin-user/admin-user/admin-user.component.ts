import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ShowUserRoles } from "src/app/dto/user-role/show-user-roles";
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { ShowUsers } from "src/app/dto/users/show-users";
import { UsersService } from "src/app/service/users.service";
import { Subscription } from "rxjs";

@Component({
    selector: "app-admin-user",
    templateUrl: "./admin-user.component.html"
})
export class AdminUserComponents implements OnDestroy {

    constructor(
        private usersService: UsersService,
        private router: Router
    ) { }

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    query?: string

    users: ShowUsers = {} as ShowUsers
    usersSub?: Subscription

    initData(): void {
        this.usersService.getAllWithPagination(this.startPage, this.maxPage, this.query).subscribe(result => {
            this.users = result
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

        this.usersSub = this.usersService.getAllWithPagination(startPage, maxPage, query).subscribe(
            result => {
                const resultData: any = result
                this.users.data = resultData.data
                this.loading = false
                this.totalData = resultData.total
                console.log(resultData)
            },
        )
    }

    editAt(id: number) {
        this.router.navigate([`/admin/user/${id}`])
    }

    ngOnDestroy() {
        this.usersSub?.unsubscribe()
    }
}