import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-signup-main',
    templateUrl: './signup-main.component.html'
})
export class SignupMainComponent {
    menu : string = 'first'

    changeComponent = () : void => {
        if(this.menu == 'first') this.menu = 'second'
        else this.menu = 'last'
    }
}