import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { Subscription } from "rxjs";
import { ShowUserRoles } from "src/app/dto/user-role/show-user-roles";
import { UserRoleService } from "src/app/service/user-role.service";

@Component({
    selector: "app-admin-user-role",
    templateUrl: "./admin-user-role.component.html",
    providers : [
        ConfirmationService
    ]
})
export class AdminUserRoleComponent implements OnInit {

    constructor(
        private confirmationService : ConfirmationService,
        private userRoleService : UserRoleService,
        private router: Router
    ) { }

    roles : ShowUserRoles = {} as ShowUserRoles
    deleteSubs? : Subscription
    isDeleted! : number

    initData() : void {
        this.userRoleService.getAll().subscribe(result => {
            this.roles = result
        })
    }

    editAt(id: string) {
        this.router.navigate([`/admin/user-role/update/${id}`])
    }

    goTo() {
        this.router.navigate(['/admin/user-role/create'])
    }

    ngOnInit() {
        this.initData()
    }

    onDelete(id : number) {
        this.isDeleted = id
    }

    deleted() : void {
        this.deleteSubs = this.userRoleService
        .delete(this.isDeleted)
        .subscribe(result => {
            this.initData()
        })
    }

    confirm(id : number) : void {
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
}