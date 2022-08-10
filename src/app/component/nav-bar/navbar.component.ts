import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { Subscription } from "rxjs";
import { LoginService } from "src/app/service/login.service";
import { LogoutService } from "src/app/service/logout.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {

    constructor(private router : Router, private loginService : LoginService, private logoutService : LogoutService) {}

    navSubs? : Subscription
    items! : MenuItem[]

    loggedIn : {} = {
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Profiles',
                icon: 'pi pi-fw pi-user',
                routerLink: '/home/profiles'
            },
            {
                label: 'Logout',
                icon:'pi pi-fw pi-power-off',
                routerLink: '/logout'
            }
        ]
    }

    notLoggedIn : {} = {
        label: 'Login',
        routerLink: '/login'
    }

    logout(): void {
        this.router.navigateByUrl('/logout')
    }

    ngOnInit(): void {
        this.items = [
            {
                label: 'Home',
                routerLink: '/home'
            },
            {
                label: 'Articles',
                routerLink: '/home/articles'
            },
            {
                label: 'Activities',
                routerLink: '/home/activities'
            },
            {
                label: 'Subscriptions',
                routerLink: '/home/subscriptions'
            }
        ]

        if(this.loginService.getData()) this.items.push(this.loggedIn)
        else this.items.push(this.notLoggedIn)
    }

    ngOnDestroy(): void {
        this.navSubs?.unsubscribe()
    }
}