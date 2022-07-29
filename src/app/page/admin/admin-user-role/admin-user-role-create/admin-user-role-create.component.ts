import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { InsertUserRoleReq } from "src/app/dto/user-role/insert-user-role-req";
import { UserRoleService } from "src/app/service/user-role.service";

@Component({
    selector: "app-admin-user-role-create",
    templateUrl: "./admin-user-role-create.component.html"
})

export class AdminUserRoleCreateComponent {

    insert : InsertUserRoleReq = {
        roleName: "",
        roleCode: "",
        isActive: false
    }

    constructor(
        private userRoleService : UserRoleService,
        private router: Router
    ) { }

    onSubmit() : void {
        this.userRoleService.insert(this.insert).subscribe(result => {
            this.router.navigateByUrl('/admin/user-role')
        })
    }

    goTo() {
        this.router.navigate(['/admin/user-role'])
    }
}