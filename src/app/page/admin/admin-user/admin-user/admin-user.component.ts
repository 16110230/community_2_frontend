import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ShowUserRoles } from "src/app/dto/user-role/show-user-roles";
import { ShowUsers } from "src/app/dto/users/show-users";
import { UsersService } from "src/app/service/users.service";

@Component({
    selector: "app-admin-user",
    templateUrl: "./admin-user.component.html"
})
export class AdminUserComponents implements OnInit {
    
    constructor(
        private usersService : UsersService,
        private router: Router
    ) { }

    users : ShowUsers = {} as ShowUsers

    initData() : void {
        this.usersService.getAll().subscribe(result => {
            this.users = result
        })
    }

    ngOnInit(): void {
        this.initData()
    }

    editAt(id: number) {
        this.router.navigate([`/admin/user/${id}`])
    }
}