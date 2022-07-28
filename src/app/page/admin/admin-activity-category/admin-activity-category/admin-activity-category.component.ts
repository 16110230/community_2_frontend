import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-activity-category",
    templateUrl: "./admin-activity-category.component.html"
})
export class AdminActivityCategory implements OnInit, OnDestroy {
    articles = [
        {
            id: 1,
            title: "this is title to express how long this title can be, and to see is table can handle long title",
            category: "category1",
            isActive: true

        },
        {
            id: 2,
            title: "this is title to express how long this title can be, and to see is table can handle long title",
            category: "category1",
            isActive: false

        }
    ]

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }

    initData(): void {

    }

    goTo() {
        this.router.navigate(['admin/activity-category/create'])
    }
    editAt(id: number) {
        this.router.navigate([`/admin/activity-category/update/${id}`])
    }
}