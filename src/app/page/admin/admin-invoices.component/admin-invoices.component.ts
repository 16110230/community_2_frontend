import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";

@Component({
    selector: "app-admin-invoices",
    templateUrl: "./admin-invoices.component.html"
})
export class AdminInvoicesComponent implements OnInit {
    items!: MenuItem[]
    invoices = [
        {
            id: 1234,
            username: "jaka sugih",
            orderDate: "2022-07-25",
            amount: 40000,
            file: "foto.jpg"
        },
        {
            id: 1235,
            username: "Putrimalu",
            orderDate: "2022-07-25",
            amount: 40000,
            file: "foto.jpg"
        },
        {
            id: 1236,
            username: "tombokun",
            orderDate: "2022-07-25",
            amount: 40000,
            file: "foto.jpg"
        }
    ]

    constructor(
        private router: Router
    ) { }

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