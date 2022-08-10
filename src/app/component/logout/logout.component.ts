import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { LogoutService } from "src/app/service/logout.service";

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit, OnDestroy {
    constructor(private logoutService : LogoutService, private router : Router) {}

    logoutSubs? : Subscription

    ngOnInit(): void {
        this.logoutService.logout().subscribe(res => {
            localStorage.clear()
            this.router.navigateByUrl('/')
        })
    }

    ngOnDestroy(): void {
        this.logoutSubs?.unsubscribe()
    }
}