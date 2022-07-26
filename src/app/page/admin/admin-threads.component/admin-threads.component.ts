import { Component } from "@angular/core";

@Component({
    selector: "app-admin-threads",
    templateUrl: "./admin-threads.component.html"
})
export class AdminThreadsComponents {
    threads = [
        {
            id: 1,
            title: "this is title to express how long this title can be, and to see is table can handle long title",
            username: "jakaSugih",
            category: "category1",
            isActive: true

        },
        {
            id: 2,
            title: "this is title to express how long this title can be, and to see is table can handle long title",
            username: "jakaSugih",
            category: "category1",
            isActive: false

        }
    ]
}