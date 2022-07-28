import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UpdatePositionReq } from "src/app/dto/position/update-position-req";
import { PositionService } from "src/app/service/position.service";

@Component({
    selector: "app-admin-position-update",
    templateUrl: "./admin-position-update.component.html"
})
export class AdminPositionUpdateComponent implements OnInit, OnDestroy {

    constructor(
        private activateRoute : ActivatedRoute,
        private positionService : PositionService,
        private router: Router
    ) { }

    update : UpdatePositionReq = {
        id : "",
        positionName : "",
        positionCode : "",
        isActive : false,
        version : 0
    }

    idParam! : number
    positionSubs? : Subscription

    ngOnInit() : void {
        this.activateRoute.params.subscribe(result => {
            const resultTemp : any = result
            this.idParam = resultTemp.id

            this.positionService.getById(this.idParam).subscribe(res => {
                this.update.id = res.data.id
                this.update.positionName = res.data.positionName
                this.update.positionCode = res.data.positionCode
                this.update.isActive = res.data.isActive
                this.update.version = res.data.version
            })
        })
    }

    onUpdate() : void {
        this.positionService.update(this.update).subscribe(result => {
            this.router.navigateByUrl('/admin/position')
        })
    }

    ngOnDestroy(): void {
        this.positionSubs?.unsubscribe()
    }

    goTo() {
        this.router.navigate(['/admin/position'])
    }

}