import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";

@Component({
    selector: "app-admin-dashboard",
    templateUrl: "./admin-dashboard.component.html"
})
export class AdminDashboardComponent implements OnInit {
    items!: MenuItem[]
    threads = [
        {
            id: 1,
            title: "new title",
            category: "cat"
        },
        {
            id: 2,
            title: "new title 2",
            category: "cat"
        }
    ]

    cardsUser = [
        {
            title: "Total Users",
            count: 304,
            icon: "pi pi-users"
        },
        {
            title: "Daily New User",
            count: 17,
            icon: "pi pi-user"
        }
    ]

    cardsActivity = [
        {
            title: "Daily New Event",
            count: 4,
            icon: "pi pi-calendar"
        },
        {
            title: "Daily New Course",
            count: 3,
            icon: "pi pi-calendar"
        }
    ]

    cardsInvoice = [
        {
            title: "Pending Subscribe Invoice",
            count: 13,
            icon: "pi pi-align-justify"
        },
        {
            title: "Pending Event Invoice",
            count: 24,
            icon: "pi pi-align-justify"
        },
        {
            title: "Pending Course Invoice",
            count: 20,
            icon: "pi pi-align-justify"
        }
    ]

    constructor(private router: Router) { }

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                items: [{
                    label: 'Dashboar',
                    icon: 'pi pi-home',
                    command: () => {
                        this.router.navigate([])
                    }
                }]
            },
            {
                label: 'Component',
                items: [
                    {
                        label: 'Users',
                        icon: 'pi pi-user',
                        command: () => {
                            this.router.navigate([])
                        }
                    },
                    {
                        label: 'Thread',
                        icon: 'pi pi-image',
                        command: () => {
                            this.router.navigate([])
                        }
                    },
                    {
                        label: 'Event',
                        icon: 'pi pi-image',
                        command: () => {
                            this.router.navigate([])
                        }
                    },
                    {
                        label: 'Course',
                        icon: 'pi pi-image',
                        command: () => {
                            this.router.navigate([])
                        }
                    }
                ]
            },
            {
                label: 'Company',
                items: [
                    {
                        label: 'Comapany',
                        command: () => {
                            this.router.navigate([])
                        }
                    },
                    {
                        label: 'Industry',
                        command: () => {
                            this.router.navigate([])
                        }
                    },
                    {
                        label: 'Position',
                        command: () => {
                            this.router.navigate([])
                        }
                    }
                ]
            },
            {
                label: 'Invoice',
                items: [
                    {
                        label: 'Subscribe',
                        icon: 'pi pi-align-center',
                        command: () => {
                            this.router.navigate([])
                        }
                    },
                    {
                        label: 'Event',
                        icon: 'pi pi-align-center',
                        command: () => {
                            this.router.navigate([])
                        }
                    },
                    {
                        label: 'Course',
                        icon: 'pi pi-align-center',
                        command: () => {
                            this.router.navigate([])
                        }
                    }
                ]
            }
        ]


    }
}