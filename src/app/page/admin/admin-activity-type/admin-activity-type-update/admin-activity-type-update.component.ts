import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UpdateActivityTypeReq } from "src/app/dto/activity-type/update-activity-type-req";
import { ActivityTypeService } from "src/app/service/activity-type.service";

@Component({
    selector: "app-admin-activity-type-update",
    templateUrl: "./admin-activity-type-update.component.html"
})
export class AdminActivityTypeUpdate implements OnInit, OnDestroy {

    constructor(
        private activateRoute : ActivatedRoute,
        private activityTypeService : ActivityTypeService,
        private router: Router
    ) { }

    update : UpdateActivityTypeReq = {
        id : "",
        typeName : "",
        typeCode : "",
        isActive : false,
        version : 0
    }

    idParam! : number
    activityTypeSubs? : Subscription

    ngOnInit(): void {
        this.activateRoute.params.subscribe(result => {
            const resultTemp : any = result
            this.idParam = resultTemp.id

            this.activityTypeService.getById(this.idParam).subscribe(res => {
                this.update.id = res.data.id
                this.update.typeName = res.data.typeName
                this.update.typeCode = res.data.typeCode
                this.update.version = res.data.version
                this.update.isActive = res.data.isActive
            })
        })
    }

    onUpdate() : void { 
        this.activityTypeService.update(this.update).subscribe(result => {
            this.router.navigateByUrl('/admin/activity-type')
        })
    }

    goTo() {
        this.router.navigate(['/admin/activity-type'])
    }

    ngOnDestroy(): void {
        this.activityTypeSubs?.unsubscribe()
    }
}