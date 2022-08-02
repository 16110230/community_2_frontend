import { Component } from "@angular/core";

@Component({
    selector: 'app-details-register',
    templateUrl: './activity-details-register.component.html',
    styleUrls: ['../../activity.component.css']
})
export class ActivityDetailsRegisterComponent {
    change = (event : any) : void => {
        console.log(event)
    }

}