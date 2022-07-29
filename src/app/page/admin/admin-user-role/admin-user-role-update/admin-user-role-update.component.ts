import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UpdateUserRoleReq } from "src/app/dto/user-role/update-user-role-req";
import { UserRoleService } from "src/app/service/user-role.service";

@Component({
    selector: "app-admin-user-role-update",
    templateUrl: "./admin-user-role-update.component.html"
})

export class AdminUserRoleUpdateComponent implements OnInit, OnDestroy {

    constructor(
        private activateRoute : ActivatedRoute,
        private userRoleService : UserRoleService,
        private router: Router
    ) { }

    update : UpdateUserRoleReq = {
        id : "",
        roleName : "",
        roleCode : "",
        version : 0,
        isActive : false
    }

    idParam! : number
    userRoleSubs? : Subscription

    ngOnInit(): void {
        this.activateRoute.params.subscribe(result => {
            const resultTemp : any = result
            this.idParam = resultTemp.id

            this.userRoleService.getById(this.idParam).subscribe(res => {
                this.update.id = res.data.id
                this.update.roleName = res.data.roleName
                this.update.roleCode = res.data.roleCode
                this.update.version = res.data.version
                this.update.isActive = res.data.isActive
            })
        })
    }

    onUpdate() : void {
        this.userRoleService.update(this.update).subscribe(result => {
            this.router.navigateByUrl('/admin/user-role')
        })
    }

    goTo() {
        this.router.navigate(['/admin/user-role'])
    }

    ngOnDestroy(): void {
        this.userRoleSubs?.unsubscribe()
    }
}