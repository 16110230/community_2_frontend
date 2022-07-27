import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-signup-nd',
    templateUrl: './signup-second-step.component.html'
})
export class SignupSecondStepComponent implements OnInit {
    companys = [
        {
            id: 1,
            companyName: "PT.Lawencon International"
        }
    ]
    industrys = [
        {
            id: 1,
            industryName: "Technoligy Information"
        }
    ]
    positions = [
        {
            id: 1,
            positionName: "HR"
        }
    ]

    ngOnInit() {

    }

}