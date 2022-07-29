import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserRoleDto } from "src/app/dto/user-role/user-role-dto";

@Component({
    selector: "app-admin-user-role",
    templateUrl: "./admin-user-role.component.html"
})
export class AdminUserRoleComponent implements OnInit {
    userRoles: UserRoleDto[] =
        [
            {
                id: "1",
                roleName: "Admin",
                roleCode: "ADM",
                version: 0,
                isActive: false
            }
        ]
    constructor(
        private router: Router
    ) { }

    editAt(id: string) {
        this.router.navigate([`/admin/user-role/update/${id}`])
    }

    goTo() {
        this.router.navigate(['/admin/user-role/create'])
    }

    ngOnInit() {

    }

}