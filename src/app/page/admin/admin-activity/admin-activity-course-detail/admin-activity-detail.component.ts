import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ShowActivityById } from "src/app/dto/activity/show-activity-by-id";
import { ActivityService } from "src/app/service/activity.service";

@Component({
    selector: "app-admin-activity-course-detail",
    templateUrl: "./admin-activity-detail.component.html",
    styleUrls: ['../admin-activity-detail.css']
})
export class AdminActivityCourseDetailComponent implements OnInit, OnDestroy {
    constructor(
        private activateRoute: ActivatedRoute,
        private activityService: ActivityService,
        private router: Router
    ) { }

    activity: ShowActivityById = {
        data: {
            id: "",
            activityTitle: "",
            activityContent: "",
            activityCategory: "",
            activityCategoryName: "",
            activityType: "",
            activityTypeName: "",
            startedAt: "",
            endedAt: "",
            file: "",
            fee: 0,
            quantity: 0,
            isLimit: false,
            provider: "",
            trainer: "",
            isActive: false,
            version: 0,
            createdAt: "",
            fullName: "",
            userFile : ""
        }

    }
    activitySub?: Subscription
    idParam!: string

    getData(): void {
        this.activateRoute.params.subscribe(result => {
            const resultTemp: any = result
            this.idParam = resultTemp.id

            this.activitySub = this.activityService.getById(this.idParam).subscribe(
                result => {
                    const resultData: any = result
                    this.activity.data = resultData.data
                },
            )
        })


    }

    ngOnInit() {
        this.getData()
    }

    ngOnDestroy() {
        this.activitySub?.unsubscribe()
    }

    goTo() {
        this.router.navigate(['/admin/activity/course'])
    }
}