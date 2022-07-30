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
                    label: 'Dashboard',
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
                        label: 'User Role',
                        icon: 'pi pi-user',
                        command: () => {
                            this.router.navigate(['/admin/user-role'])
                        }
                    },
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
                            this.router.navigate(['/admin/activity/event'])
                        }
                    },
                    {
                        label: 'Course',
                        icon: 'pi pi-image',
                        command: () => {
                            this.router.navigate(['/admin/activity/course'])
                        }
                    },
                    {
                        label: 'Activity Category',
                        icon: 'pi pi-table',

                        command: () => {
                            this.router.navigate(['/admin/activity-category'])
                        }
                    },
                    {
                        label: 'Activity Type',
                        icon: 'pi pi-table',

                        command: () => {
                            this.router.navigate(['/admin/activity-type'])
                        }
                    },
                    {
                        label: 'Thread Category',
                        icon: 'pi pi-table',

                        command: () => {
                            this.router.navigate(['/admin/thread-category'])
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
                            this.router.navigate(['/admin/company'])
                        }
                    },
                    {
                        label: 'Industry',
                        command: () => {
                            this.router.navigate(['/admin/industry'])
                        }
                    },
                    {
                        label: 'Position',
                        command: () => {
                            this.router.navigate(['/admin/position'])
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
                            this.router.navigate(['/admin/invoice/subscribe'])
                        }
                    },
                    {
                        label: 'Event',
                        icon: 'pi pi-align-center',
                        command: () => {
                            this.router.navigate(['/admin/invoice/event'])
                        }
                    },
                    {
                        label: 'Course',
                        icon: 'pi pi-align-center',
                        command: () => {
                            this.router.navigate(['/admin/invoice/course'])
                        }
                    }
                ]
            },
            {
                label: 'Pending Invoice',
                items: [
                    {
                        label: 'Subscribe',
                        icon: 'pi pi-align-center',
                        command: () => {
                            this.router.navigate(['/admin/invoice/subscribe/pending'])
                        }
                    },
                    {
                        label: 'Event',
                        icon: 'pi pi-align-center',
                        command: () => {
                            this.router.navigate(['/admin/invoice/event/pending'])
                        }
                    },
                    {
                        label: 'Course',
                        icon: 'pi pi-align-center',
                        command: () => {
                            this.router.navigate(['/admin/invoice/course/pending'])
                        }
                    }
                ]
            }
        ]
    }
}