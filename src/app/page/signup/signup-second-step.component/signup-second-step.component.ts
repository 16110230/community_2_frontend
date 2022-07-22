import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-signup-nd',
    templateUrl: './signup-second-step.component.html'
})
export class SignupSecondStepComponent implements OnInit {
    companys: {}[] = []
    industrys: {}[] = []

    ngOnInit() {
        this.companys = [
            {
                id: 1,
                name: "PT.Lawencon International"
            }
        ]

        this.industrys = [
            {
                id: 1,
                name: "Technoligy Information"
            }
        ]
    }

}