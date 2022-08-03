import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ShowActivityCategories } from "src/app/dto/activity-category/show-activity-categories";
import { ShowActivityTypes } from "src/app/dto/activity-type/show-activity-types";
import { ShowActivities } from "src/app/dto/activity/show-activities";
import { ActivityCategoryService } from "src/app/service/activity-category.service";
import { ActivityTypeService } from "src/app/service/activity-type.service";
import { ActivityService } from "src/app/service/activity.service";

@Component({
    selector: 'app-activity-list',
    templateUrl: './activity-list.component.html',
    styleUrls: ['../activity.component.css', '../../home/home.component.css']
})
export class ActivityListComponent implements OnInit, OnDestroy {

    constructor(private activityService: ActivityService, private activityTypeService: ActivityTypeService,
        private activityCategoryService: ActivityCategoryService) { }

    selectedType: string = ''
    selectedCategory: string = ''
    activitySubs?: Subscription
    activities: ShowActivities = {
        data: []
    }

    types: ShowActivityTypes = {
        data: []
    }

    categories: ShowActivityCategories = {
        data: []
    }

    ngOnInit(): void {
        this.initData()
    }

    initData = (): void => {
        this.activityService.getAll().subscribe(res => {
            this.activities = res
        })

        this.activityTypeService.getAll(0, 0).subscribe(res => {
            this.types = res
        })

        this.activityCategoryService.getAll(0, 0).subscribe(res => {
            this.categories = res
        })
    }

    ngOnDestroy(): void {
        this.activitySubs?.unsubscribe()
    }

    filter = (): void => {
        console.log(this.selectedType, this.selectedCategory)
    }

    
}