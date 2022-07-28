import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { InsertUserRoleReq } from "src/app/dto/user-role/insert-user-role-req";

@Component({
    selector: "app-admin-user-role-create",
    templateUrl: "./admin-user-role-create.component.html"
})

export class AdminUserRoleCreateComponent {

    insertReq: InsertUserRoleReq = {
        roleName: "",
        roleCode: "",
        isActive: true
    }

    constructor(
        private router: Router
    ) { }

    goTo() {
        this.router.navigate(['/admin/user-role'])
    }
}