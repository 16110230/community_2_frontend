import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { InsertActyivityTypeReq } from "src/app/dto/activity-type/insert-activity-type-req";
import { ActivityTypeService } from "src/app/service/activity-type.service";

@Component({
    selector: "app-admin-activity-type-create",
    templateUrl: "./admin-activity-type-create.component.html"
})
export class AdminActivityTypeCreate{

    constructor(
        private activityTypeService : ActivityTypeService,
        private router: Router,
    ) { }

    insert: InsertActyivityTypeReq = {
        typeName : "",
        typeCode : "",
        isActive : false
    }

    onSubmit() {
        this.activityTypeService.insert(this.insert).subscribe(result => {
            this.router.navigateByUrl('/admin/activity-type')
        })
    }

    goTo() {
        this.router.navigate(['/admin/activity-type'])
    }
}