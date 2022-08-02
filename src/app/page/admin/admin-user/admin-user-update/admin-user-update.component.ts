import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UpdateUserReq } from "src/app/dto/users/update-user-req";
import { UsersService } from "src/app/service/users.service";

@Component({
    selector: "app-admin-user-update",
    templateUrl: "./admin-user-update.component.html"
})

export class AdminUserUpdateComponent implements OnInit {

    constructor(
        private activateRoute : ActivatedRoute,
        private usersService : UsersService,
        private router: Router
    ) { }

    update : UpdateUserReq = {
        id : "",
        fullName : "",
        username : "",
        company : "",
        companyName : "",
        industry : "",
        industryName : "",
        position : "",
        positionName : "",
        version : 0,
        isActive : false
    }

    idParam! : number

    ngOnInit(): void {
        this.activateRoute.params.subscribe(result => {
            const resultTemp : any = result
            this.idParam = resultTemp.id

            this.usersService.getById(this.idParam).subscribe(res => {
                this.update.id = res.data.id
                this.update.fullName = res.data.fullName
                this.update.username = res.data.username
                this.update.company = res.data.company
                this.update.companyName = res.data.companyName
                this.update.industry = res.data.industry
                this.update.industryName = res.data.industryName
                this.update.position = res.data.position
                this.update.positionName = res.data.positionName
                this.update.version = res.data.version
                this.update.isActive = res.data.isActive
            })
        })
    }

    onUpdate() :void {
        this.usersService.update(this.update).subscribe(result => {
            this.router.navigateByUrl('/admin/user')
        })
    }

    goTo() {
        this.router.navigate(['/admin/user'])
    }
}