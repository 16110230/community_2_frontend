import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getCode } from "src/app/state/app.selector";

@Component({
    selector: 'app-signup-veryfi',
    templateUrl: './signup-verify.component.html'
})
export class SignupVerifyComponent implements OnInit {
    constructor(private store : Store) {}

    code : string = ''
    codeRes : string = ''

    ngOnInit(): void {
        this.store.select(getCode)
            .subscribe(res => { this.codeRes = res })
    }

    submit = (code : string) : void => {
        if(code !== this.codeRes) {

        } else {

        }
    }
}