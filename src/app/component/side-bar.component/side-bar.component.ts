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
                        this.router.navigate(['/admin'])
                    }
                }]
            },
            {
                label: 'Manage',
                items: [
                    {
                        label: 'Users',
                        icon: 'pi pi-user',
                        command: () => {
                            this.router.navigate(['/admin/user'])
                        }
                    },
                    {
                        label: 'Thread',
                        icon: 'pi pi-image',
                        command: () => {
                            this.router.navigate(['/admin/thread'])
                        }
                    },
                    {
                        label: 'Event',
                        icon: 'pi pi-image',
                        command: () => {
                            this.router.navigate(['/admin/event'])
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
                label: 'Article',
                items: [
                    {
                        label: 'Article',
                        command: () => {
                            this.router.navigate(['admin/article'])
                        }
                    }
                ]
            },
            {
                label: 'Organization',
                items: [
                    {
                        label: 'Comapany',
                        command: () => {
                            this.router.navigate(['/admin/organization/company'])
                        }
                    },
                    {
                        label: 'Industry',
                        command: () => {
                            this.router.navigate(['/admin/organization/industry'])
                        }
                    },
                    {
                        label: 'Position',
                        command: () => {
                            this.router.navigate(['/admin/organization/position'])
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