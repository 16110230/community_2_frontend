import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ShowActivityTypes } from "src/app/dto/activity-type/show-activity-types";
import { InsertActivityReq } from "src/app/dto/activity/insert-activity-req";
import { ActivityTypeService } from "src/app/service/activity-type.service";
import { ActivityService } from "src/app/service/activity.service";

@Component({
    selector: 'app-activity-new',
    templateUrl: './activity-create.component.html',
    styleUrls: ['../../home/home.component.css', '../activity.component.css']
})
export class ActivityCreateComponent implements OnInit, OnDestroy {

    constructor(private activityTypeService : ActivityTypeService, private activityService : ActivityService,
        private router : Router) {}

    activitySubs? : Subscription

    data : InsertActivityReq = {
        activityTitle: '',
        activityContent: '',
        activityType: '',
        startedAt: '',
        endedAt: '',
        fee: 0,
        quantity: 0,
        isLimit: false,
        provider: '',
        trainer: ''
    }

    types : ShowActivityTypes = {
        data : []
    }

    type : string = ''
    category : string = ''
    startDate : string = ''
    endDate : string = ''

    ngOnInit(): void {
        this.initData()
    }

    initData = () : void => {
        this.activityTypeService.getAll().subscribe(res => {
            this.types = res
        })
    }

    ngOnDestroy(): void {
        this.activitySubs?.unsubscribe()
    }

    submit = () : void => {
        this.activityService.insert(this.data).subscribe(() => this.router.navigateByUrl('/member/articles'))
    }
}