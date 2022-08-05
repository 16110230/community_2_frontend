import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { LoginService } from "src/app/service/login.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    constructor(private router : Router, private loginService : LoginService) {}

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
                command : () => {
                    this.logout()
                }
            }
        ]
    }

    notLoggedIn : {} = {
        label: 'Login',
        routerLink: '/login'
    }

    logout(): void {
        localStorage.clear()
        this.router.navigateByUrl('/')
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
            // {
            //     icon: 'pi pi-fw pi-user',
            //     items: [
            //         {
            //             label: 'Profiles',
            //             icon: 'pi pi-fw pi-user',
            //             routerLink: '/member/profiles'
            //         },
            //         {
            //             label: 'Logout',
            //             icon:'pi pi-fw pi-power-off',
            //             command : () => {
            //                 this.logout()
            //             }
            //         }
            //     ]
            // }
        ]

        if(this.loginService.getData()) this.items.push(this.loggedIn)
        else this.items.push(this.notLoggedIn)
    }
}