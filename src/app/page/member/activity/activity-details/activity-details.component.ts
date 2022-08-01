import { Component } from "@angular/core";

@Component({
    selector: 'app-activity-details',
    templateUrl: './activity-details.component.html',
    styleUrls: ['../activity.component.css', '../../home/home.component.css']
})
export class ActivityDetailsComponent {
    firstStep : boolean = true

    clickStep = () : void => {
        this.firstStep = !this.firstStep
    }
}