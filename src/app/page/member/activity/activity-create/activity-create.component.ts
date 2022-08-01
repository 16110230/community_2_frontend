import { Component } from "@angular/core";

@Component({
    selector: 'app-activity-new',
    templateUrl: './activity-create.component.html',
    styleUrls: ['../../home/home.component.css', '../activity.component.css']
})
export class ActivityCreateComponent {
    categories = [
        'Event', 'Course'
    ]

    category : string = ''
    startDate : string = ''
    endDate : string = ''
    checked : boolean = false
}