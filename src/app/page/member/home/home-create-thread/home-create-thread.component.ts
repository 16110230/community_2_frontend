import { Component } from "@angular/core";
import { FormArray, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-home-create',
    templateUrl: './home-create-thread.component.html',
    styleUrls: ['../home.component.css']
})
export class HomeCreateComponent {
    category! : string
    categories = [
        'Regular', 'Premium', 'Polling'
    ]

    pollings = new FormArray([new FormControl()])

    addNewPolling = () : void => {
        this.pollings.push(new FormControl)
        console.log(this.pollings)
    }

    change = (event : any) : void => {
        console.log(event)
    }
}