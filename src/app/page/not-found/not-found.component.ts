import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-notfound',
    template: `
        <div class="flex flex-column align-items-center justify-content-center h-screen">
            <h1>404 - Page Not Found</h1>
            <a (click)="prevPage()" style="text-decoration:underline;cursor:pointer;color:blue">Back home previous page</a>
        </div>
    `
})
export class NotFoundComponent {
    constructor(private router: Router) {}

    prevPage = () : void => {
        this.router.navigateByUrl('/home')
    }
}