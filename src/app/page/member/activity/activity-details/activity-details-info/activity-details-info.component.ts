import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ShowActivityById } from "src/app/dto/activity/show-activity-by-id";
import { ActivityService } from "src/app/service/activity.service";

@Component({
    selector: 'app-details-info',
    templateUrl: './activity-details-info.component.html',
    styleUrls: ['../../activity.component.css', '../../../home/home.component.css']
})
export class ActivityDetailsInfoComponent implements OnInit {
    constructor(private activateRoute : ActivatedRoute, private activityService : ActivityService) {}

    @Output() newEvent = new EventEmitter<void>()

    activity : ShowActivityById = {
        data : {
            id: "",
            activityTitle: "",
            activityContent: "",
            activityCategory: "",
            activityCategoryName: "",
            activityType : "",
            activityTypeName : "",
            startedAt : "",
            endedAt: "",
            file : "",
            fee: 0,
            quantity: 0,
            isLimit: false,
            provider: "",
            trainer: "",
            isActive: false,
            version: 0,
            createdAt : "",
            fullName : "",
            userFile : ""
        }
    }
    idParam! : string

    initData() :void {
        this.activateRoute.params.subscribe(result => {
            const resultTemp : any = result
            this.idParam = resultTemp.id

            this.activityService.getById(this.idParam).subscribe(result => {
                this.activity = result
            })
        })
    }

    ngOnInit(): void {
        this.initData()
    }

    submit() : void {
        this.newEvent.emit()
    }
}