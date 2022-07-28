import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { InsertPositionReq } from "src/app/dto/position/insert-position-req";
import { PositionService } from "src/app/service/position.service";

@Component({
    selector: "app-admin-position-create",
    templateUrl: "./admin-position-create.component.html"
})
export class AdminPositionCreateComponent {

    constructor(
        private positionService : PositionService,
        private router: Router
    ) { }

    insert : InsertPositionReq = {
        positionName : "",
        positionCode : "",
        isActive : false
    }

    onSubmit() : void {
        this.positionService.insert(this.insert).subscribe(result => {
            this.router.navigateByUrl('/admin/position')
        })
    }

    goTo() {
        this.router.navigate(['/admin/position'])
    }
}