import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    items! : MenuItem[]

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
                icon: 'pi pi-user',
                items: [
                    {
                        label: 'Profiles',
                        routerLink: '/member/profiles'
                    },
                    {
                        label: 'Logout',
                        routerLink: '/'
                    }
                ]
            }
        ]
    }
}