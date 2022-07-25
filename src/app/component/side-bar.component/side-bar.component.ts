import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";

@Component({
    selector: "side-bar-custom",
    templateUrl: "./side-bar.component.html"
})

export class SideBarComponent implements OnInit {
    items!: MenuItem[]

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