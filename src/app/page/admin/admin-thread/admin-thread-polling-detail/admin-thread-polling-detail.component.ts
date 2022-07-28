import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-admin-thread-polling-detail",
    templateUrl: "./admin-thread-polling-detail.component.html"
})
export class AdminThreadPollingDetailCOmponent implements OnInit {
    totalCount = 0;
    winner: any[] = []
    entryData = [
        {
            id: "1",
            pollingName: "A",
            polling: 75
        },
        {
            id: "2",
            pollingName: "B",
            polling: 40
        },
        {
            id: "3",
            pollingName: "C",
            polling: 75
        }
    ]
    constructor(
        private router: Router
    ) { }

    goTo() {
        this.router.navigate(['/admin/thread/'])
    }


    getTotalCount() {
        for (let data of this.entryData) {
            this.totalCount += data.polling
        }

        let index = 0
        for (let i in this.entryData) {
            if (this.entryData[index].polling < this.entryData[i].polling) { index = parseInt(i) }
        }

        for (let j in this.entryData) {
            if (this.entryData[index].polling == this.entryData[j].polling) { this.winner.push(parseInt(j)) }
        }
    }
    ngOnInit() {
        this.getTotalCount()
    }

}