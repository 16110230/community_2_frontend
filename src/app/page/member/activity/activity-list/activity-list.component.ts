import { Component } from "@angular/core";

@Component({
    selector: 'app-activity-list',
    templateUrl: './activity-list.component.html',
    styleUrls: ['../activity.component.css', '../../home/home.component.css']
})
export class ActivityListComponent {
    selectedType : string = ''
    selectedCategory : string = ''
}