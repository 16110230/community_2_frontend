import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    constructor(private router : Router) {}

    items! : MenuItem[]

    logout(): void {
        localStorage.clear()
        this.router.navigateByUrl('/')
    }

    ngOnInit(): void {
        this.items = [
            {
                label: 'Home',
                routerLink: '/member'
            },
            {
                label: 'Articles',
                routerLink: '/member/articles'
            },
            {
                label: 'Activities',
                routerLink: '/member/activities'
            },
            {
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Profiles',
                        icon: 'pi pi-fw pi-user',
                        routerLink: '/member/profiles'
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
        ]
    }
}