import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-forbidden',
    template: `
        <div class="flex flex-column align-items-center justify-content-center h-screen">
            <h1 class="block">403 - Forbidden Page</h1>
            <a (click)="prevPage()" style="text-decoration:underline;cursor:pointer;color:blue;">Back to home page</a>
        </div>
    `
})
export class ForbiddenComponent {
    constructor(private router: Router) {}

    prevPage = () : void => {
        this.router.navigateByUrl('/home')
    }
}