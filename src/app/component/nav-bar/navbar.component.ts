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
                icon: 'pi pi-fw pi-user text-blue-600',
                routerLink: '/home/profiles'
            },
            {
                label: 'Logout',
                icon:'pi pi-fw pi-power-off text-red-500',
                routerLink: '/logout'
            }
        ]
    }

    premiumMenu : {} = {
        label: 'Subscriptions',
        routerLink: '/home/subscriptions',
        icon : 'pi pi-star text-yellow-500'
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
                routerLink: '/home',
                icon : 'pi pi-home text-blue-500'
            },
            {
                label: 'Articles',
                routerLink: '/home/articles',
                icon : 'pi pi-book text-teal-500'
            },
            {
                label: 'Activities',
                routerLink: '/home/activities',
                icon : 'pi pi-ticket text-red-500'
            }
        ]
        
        if(this.loginService.getData()) {
            if(!this.loginService.getData()?.data.prem) this.items.push(this.premiumMenu)
            
            this.items.push(this.loggedIn)
        }
        else this.items.push(this.notLoggedIn)

    }

    ngOnDestroy(): void {
        this.navSubs?.unsubscribe()
    }
}